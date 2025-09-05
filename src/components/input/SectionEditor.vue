<template>
  <div class="section-editor q-pa-md q-mb-lg bg-grey-1 rounded">
    <div class="row items-center justify-between q-mb-sm">
      <h5 class="col">{{ title }}</h5>
      <q-btn dense color="primary" label="Add {{ title }}" @click="add" />
    </div>

    <div v-if="items.length === 0" class="text-grey-6 italic">
      No {{ title.toLowerCase() }} added yet.
    </div>

    <div
      v-for="(item, index) in items"
      :key="itemKey(item, index)"
      class="editor-item q-mb-md bg-white shadow-1 rounded q-pa-md"
    >
      <slot
        :item="item"
        :index="index"
        :update="(field: keyof Recordable, value: unknown) => updateField(index, field, value)"
      />
      <div class="row justify-end q-mt-sm">
        <q-btn dense flat color="negative" icon="delete" @click="remove(index)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Recordable } from 'src/models/models.ts';

export default defineComponent({
  name: 'SectionEditor',
  props: {
    title: { type: String, required: true },
    items: { type: Array as PropType<Recordable[]>, required: true },
    onAdd: { type: Function as PropType<() => void>, required: true },
    onRemove: { type: Function as PropType<(idx: number) => void>, required: true },
    onUpdate: {
      type: Function as PropType<(idx: number, field: keyof Recordable, value: unknown) => void>,
      required: false,
    },
  },
  setup(props) {
    function add() {
      props.onAdd();
    }
    function remove(idx: number) {
      props.onRemove(idx);
    }
    function updateField(idx: number, field: keyof Recordable, value: unknown) {
      if (props.onUpdate) {
        props.onUpdate(idx, field, value);
      } else {
        // fallback: directly mutate if no onUpdate provided
        (props.items[idx] as Recordable)[field] = value;
      }
    }
    function itemKey(item: Recordable, idx: number): number | string {
      const id = item.id as string | number | undefined;
      return typeof id === 'string' || typeof id === 'number' ? id : idx;
    }

    return { add, remove, updateField, itemKey };
  },
});
</script>

<style lang="scss" scoped>
.section-editor {
  border: 1px solid #ddd;
  h5 {
    margin: 0;
  }
  .editor-item {
    position: relative;
  }
}
</style>
