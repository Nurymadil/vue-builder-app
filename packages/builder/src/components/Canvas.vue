<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const list = ref(store.schema.components)
</script>
<template>
  <draggable
    v-model="list"
    item-key="id"
    class="flex-1 p-6 grid grid-cols-12 gap-4 overflow-auto"
    :group="{ name: 'fb', pull: 'clone', put: false }"
  >
    <template #item="{ element }">
      <div class="col-span-12 border rounded p-4 bg-white shadow">
        {{ element.type }}
      </div>
    </template>
  </draggable>
</template>
