<template>
  <div ref="chartContainer" class="w-full h-[600px]"></div>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { ref, onMounted } from 'vue';
import { useResumeStore } from 'src/stores/useResumeStore';

type SkillNode = {
  name: string;
  value?: number;
  children?: SkillNode[];
};

const chartContainer = ref<HTMLDivElement | null>(null);
const resumeStore = useResumeStore();

onMounted(() => {
  const data: SkillNode = {
    name: 'Skills',
    children: resumeStore.skills as SkillNode[],
  };

  const width = 600;
  const radius = width / 2;

  const color = d3.scaleOrdinal<string>().range(d3.schemeCategory10);

  const root = d3
    .hierarchy(data)
    .sum((d) => d.value ?? 0)
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

  const partition = d3.partition<SkillNode>().size([2 * Math.PI, radius]);

  const rootWithLayout = partition(root);
  const arc = d3
    .arc<d3.HierarchyRectangularNode<SkillNode>>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1);

  const svg = d3
    .select(chartContainer.value)
    .append('svg')
    .attr('viewBox', [0, 0, width, width])
    .style('font', '10px sans-serif')
    .append('g')
    .attr('transform', `translate(${width / 2},${width / 2})`);

  svg
    .selectAll('path')
    .data(rootWithLayout.descendants().slice(1))
    .join('path')
    .attr('fill', (d) => {
      while (d.depth > 1) d = d.parent!;
      return color(d.data.name);
    })
    .attr('d', arc)
    .append('title')
    .text(
      (d) =>
        `${d
          .ancestors()
          .map((d) => d.data.name)
          .reverse()
          .join(' / ')}\n${d.value}`,
    );

  svg
    .selectAll('text')
    .data(rootWithLayout.descendants().slice(1))
    .join('text')
    .attr('transform', function (d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
      const y = (d.y0 + d.y1) / 2;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    })
    .attr('dx', '-15') // adjust label position
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .text((d) => {
      const angle = d.x1 - d.x0;
      return angle > 0.05 ? d.data.name : ''; // show label only if space allows
    });
});
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
