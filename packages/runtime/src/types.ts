export interface ComponentNode<T = any> {
  id: string
  type: string
  props: T
  children?: ComponentNode[]
}
export interface FormSchema {
  version: string
  components: ComponentNode[]
}
