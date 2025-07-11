import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export interface ComponentNode {
  id: string
  type: string
  props: Record<string, unknown>
  children?: ComponentNode[]
}

export const useBuilderStore = defineStore('builder', () => {
  const schema = reactive({ version: '0.1', components: [] as ComponentNode[] })
  const selectedNode = ref<ComponentNode | null>(null)

  const toolbarGroups = [
    { name: 'Basic', components: [{ type: 'InputText', label: 'Text' }] }
  ]

  function beginDrag(c: { type: string }) {
    console.log('drag', c)
  }

  return { schema, selectedNode, toolbarGroups, beginDrag }
})
