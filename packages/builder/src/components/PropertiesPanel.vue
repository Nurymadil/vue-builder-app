<script setup lang="ts">
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const node = computed(() => store.selectedNode)
</script>
<template>
  <aside class="p-4 overflow-y-auto">
    <template v-if="node">
      <h3 class="font-semibold mb-2">{{ node.type }} props</h3>
      <pre v-text="JSON.stringify(node.props, null, 2)" />
    </template>
    <p v-else class="text-sm text-slate-400">Выберите элемент…</p>
  </aside>
</template>
