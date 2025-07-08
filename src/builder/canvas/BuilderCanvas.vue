<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { TextField, Checkbox } from '../entities'

const showDialog = ref(false)
</script>

<template>
  <div class="builder-canvas">
    <p>Canvas Area</p>
    <div class="components">
      <TextField />
      <Checkbox />
      <Button label="Open" @click="showDialog = true" />
      <Dialog v-model:visible="showDialog" modal header="PrimeVue Dialog">
        Dialog content goes here.
      </Dialog>
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
