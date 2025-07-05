<script setup lang="ts">
import * as d3 from 'd3';
import { ref, onMounted } from 'vue';
import { useSkillStore } from 'src/stores/useSkillStore';
import type { SkillNode } from 'src/models/models';

const chartContainer = ref<HTMLDivElement | null>(null);
const skillStore = useSkillStore();

onMounted(() => {
  function assignValues(node: SkillNode): number {
    if (!node.children || node.children.length === 0) {
      node.value = node.value ?? 1;
      return node.value;
    }
    const total = node.children.reduce((sum, child) => sum + assignValues(child), 0);
    node.value = total;
    return total;
  }

  const data: SkillNode = {
    name: 'Skills',
    children: skillStore.skills.children
      ? JSON.parse(JSON.stringify(skillStore.skills.children))
      : [],
  };

  assignValues(data);

  const width = 500;
  const radius = width / 2;

  const color = d3
    .scaleSequential(d3.interpolateCool)
    .domain([0, (data.children?.length ?? 1) + 1]);

  const partition = d3.partition<SkillNode>().size([2 * Math.PI, radius]);

  const root = d3
    .hierarchy<SkillNode>(data)
    .sum((d) => {
      // Instead of using fixed numeric values,
      // use the label length as a proxy for space needed
      if (!d.children || d.children.length === 0) {
        return d.name.length || 1;
      }
      return 0; // internal nodes get summed from children
    })
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

  // Tooltip
  const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'custom-tooltip')
    .style('position', 'absolute')
    .style('background', '#fff')
    .style('padding', '6px 10px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('box-shadow', '0 2px 5px rgba(0,0,0,0.3)')
    .style('font-size', '12px')
    .style('pointer-events', 'none')
    .style('white-space', 'normal')
    .style('max-width', '200px')
    .style('display', 'none');

  // Arcs
  svg
    .append('g')
    .attr('fill-opacity', 0.7)
    .selectAll('path')
    .data(nodes.filter((d) => d.depth > 0))
    .join('path')
    .attr('fill', (d) => {
      let current = d;
      while (current.depth > 1) current = current.parent!;
      return color(current.data.name.length);
    })
    .attr('d', arc)
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .on('mouseover', function (event, d) {
      d3.select(this).attr('fill-opacity', 1);
      const path = d
        .ancestors()
        .map((d) => d.data.name)
        .reverse()
        .join(' / ');
      tooltip
        .style('display', 'block')
        .html(`<strong>${path}</strong><br>${format(d.value ?? 0)}`)
        .style('left', event.pageX + 10 + 'px')
        .style('top', event.pageY + 10 + 'px');
    })
    .on('mousemove', (event) => {
      tooltip.style('left', event.pageX + 10 + 'px').style('top', event.pageY + 10 + 'px');
    })
    .on('mouseout', function () {
      d3.select(this).attr('fill-opacity', 0.7);
      tooltip.style('display', 'none');
    });

  // Labels with rotation + word wrap
  svg
    .append('g')
    .attr('text-anchor', 'middle')

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
    .attr('font-size', (d) => {
      const angle = d.x1 - d.x0; // angular width
      const radius = (d.y0 + d.y1) / 2; // mid radius
      const arcLength = radius * angle; // arc circumference portion
      const arcThickness = d.y1 - d.y0;

      const availableWidth = Math.min(arcLength, arcThickness * 1.5); // balance of width and thickness
      const estimatedTextLength = d.data.name.length || 1;

      // Estimate font size so text fits availableWidth
      const size = Math.min((availableWidth / estimatedTextLength) * 1.6, arcThickness); // clamp to avoid overflow

      return Math.max(size, 5); // minimum readable size
    })
    .attr('dy', '0.35em')
    .each(function (d) {
      const name = d.data.name;
      const maxLen = 10;
      const lines =
        name.length > maxLen ? (name.match(new RegExp(`.{1,${maxLen}}`, 'g')) ?? [name]) : [name];

      const el = d3.select(this);
      lines.forEach((line, i) => {
        el.append('tspan')
          .attr('x', 0)
          .attr('dy', i === 0 ? 0 : '1.1em')
          .text(line)
          .attr('class', 'text-label');
      });
    });
});
</script>

<template>
  <div ref="chartContainer" class="skills-chart"></div>
</template>
<style lang="scss">
.text-label {
  text-align: center;
  display: flex;
  text-wrap: fit;
  padding: 3px;
}
</style>
