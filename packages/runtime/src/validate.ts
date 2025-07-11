import Ajv from 'ajv'
import type { FormSchema } from './types'
export function validate(schema: FormSchema, data: unknown) {
  const ajv = new Ajv()
  const compiled = ajv.compile({}) // stub
  return compiled(data)
}
