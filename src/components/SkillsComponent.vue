<script setup lang="ts">
import * as d3 from 'd3';
import { ref, onMounted } from 'vue';
import { useSkillStore } from 'src/stores/useSkillStore';
import type { SkillNode } from 'src/models/models';

const chartContainer = ref<HTMLDivElement | null>(null);
const skillStore = useSkillStore();

onMounted(() => {
  // Recursive function to assign values if missing, summing children values
  function assignValues(node: SkillNode): number {
    if (!node.children || node.children.length === 0) {
      // Leaf node: assign existing value or default to 1
      node.value = node.value ?? 1;
      return node.value;
    }
    const total = node.children.reduce((sum, child) => sum + assignValues(child), 0);
    node.value = total;
    return total;
  }

  // Clone the data to avoid mutating the store directly (optional but cleaner)
  const data: SkillNode = {
    name: 'Skills',
    children: skillStore.skills.children
      ? JSON.parse(JSON.stringify(skillStore.skills.children))
      : [],
  };

  assignValues(data); // Assign values for partition sizing

  const width = 500;
  const radius = width / 2;

  // Use a sequential color scale for smooth colors
  const color = d3
    .scaleSequential(d3.interpolateCool)
    .domain([0, (data.children?.length ?? 1) + 1]);

  const partition = d3.partition<SkillNode>().size([2 * Math.PI, radius]);

  const root = d3
    .hierarchy<SkillNode>(data)
    .sum((d) => d.value ?? 1)
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

  const rootWithLayout = partition(root);

  const arc = d3
    .arc<d3.HierarchyRectangularNode<SkillNode>>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.01))
    .padRadius(radius / 2)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1);

  const svg = d3
    .select(chartContainer.value)
    .append('svg')
    .attr('viewBox', [-width / 2, -width / 2, width, width])
    .style('font', '10px sans-serif');

  const format = d3.format(',d');

  const nodes = rootWithLayout.descendants();

  svg
    .append('g')
    .attr('fill-opacity', 0.7)
    .selectAll('path')
    .data(nodes.filter((d) => d.depth > 0))
    .join('path')
    .attr('fill', (d) => {
      let current: typeof d = d;
      while (current.depth > 1) current = current.parent!;
      return color(current.data.name.length); // Use name length for some variance
    })
    .attr('d', arc)
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .on('mouseover', function () {
      d3.select(this).attr('fill-opacity', 1);
    })
    .on('mouseout', function () {
      d3.select(this).attr('fill-opacity', 0.7);
    })
    .append('title')
    .text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join('/')}\n${format(d.value ?? 0)}`,
    );

  svg
    .append('g')
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .attr('font-size', 10)
    .attr('font-family', 'sans-serif')
    .selectAll('text')
    .data(
      nodes.filter((d) => {
        const angle = d.x1 - d.x0;
        const r = (d.y0 + d.y1) / 2;
        return d.depth && r * angle > 10;
      }),
    )
    .join('text')
    .attr('transform', (d) => {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
      const y = (d.y0 + d.y1) / 2;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    })
    .attr('dy', '0.35em')
    .text((d) => d.data.name);
});
</script>
<template>
  <div ref="chartContainer" class="skills-chart"></div>
</template>
