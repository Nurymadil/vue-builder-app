import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'
import { i18n } from '@/i18n'

describe('HelloWorld', () => {
  it('renders message when passed', () => {
    const wrapper = mount(HelloWorld, {
      global: { plugins: [i18n] },
      props: { msg: 'Hello Vitest' }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
