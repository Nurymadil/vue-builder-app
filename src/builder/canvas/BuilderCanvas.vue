<script setup lang="ts">
import { TextField, Checkbox } from '../entities'
</script>

<template>
  <div class="builder-canvas">
    <p>Canvas Area</p>
    <div class="components">
      <TextField />
      <Checkbox />
    </div>
  </div>
</template>

<style scoped>
.builder-canvas {
  border: 1px dashed #ccc;
  padding: 1rem;
}
.components {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}
</style>
