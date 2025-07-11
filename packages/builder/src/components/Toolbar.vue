<script setup lang="ts">
import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const groups = computed(() => store.toolbarGroups)
</script>
<template>
  <nav class="p-2 overflow-y-auto">
    <div v-for="g in groups" :key="g.name" class="mb-4">
      <h3 class="text-xs font-bold mb-1">{{ g.name }}</h3>
      <button
        v-for="c in g.components"
        :key="c.type"
        draggable
        class="w-full text-left px-2 py-1 hover:bg-slate-100 rounded flex gap-1 items-center"
        @dragstart="store.beginDrag(c)"
      >
        <span class="i-lucide:component w-4 h-4" />
        <span class="truncate">{{ c.label }}</span>
      </button>
    </div>
  </nav>
</template>
