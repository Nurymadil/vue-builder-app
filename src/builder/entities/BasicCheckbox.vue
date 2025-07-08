<script setup lang="ts">
import Checkbox from 'primevue/checkbox'
</script>

<template>
  <label class="checkbox">
    <Checkbox binary />
    Checkbox
  </label>
</template>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
