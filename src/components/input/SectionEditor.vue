<template>
  <div class="section-editor">
    <h3>{{ title }}</h3>
    <div v-for="(item, idx) in items" :key="idx" class="editor-item">
      <slot :item="item" :index="idx" />
      <q-btn color="negative" dense flat icon="delete" @click="remove(idx)" />
    </div>
    <q-btn color="primary" label="Add {{ title }}" @click="add()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    title: String,
    items: Array as PropType<any[]>,
    onAdd: Function as PropType<() => void>,
    onRemove: Function as PropType<(idx: number) => void>,
  },
  setup(props) {
    function add() {
      props.onAdd();
    }
    function remove(idx: number) {
      props.onRemove(idx);
    }
    return { add, remove };
  },
});
</script>
