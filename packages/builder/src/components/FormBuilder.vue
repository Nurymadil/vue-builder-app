<script setup lang="ts">
import Toolbar from './Toolbar.vue'
import Canvas from './Canvas.vue'
import PropertiesPanel from './PropertiesPanel.vue'
</script>
<template>
  <div class="h-screen flex">
    <Toolbar class="w-60 border-r" />
    <Canvas class="flex-1" />
    <PropertiesPanel class="w-72 border-l" />
  </div>
</template>
