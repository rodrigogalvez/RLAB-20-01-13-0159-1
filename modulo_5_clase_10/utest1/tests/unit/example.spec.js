import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Probando el HelloWorld.vue', () => {
  it('Dibuja el props.msg cuando se pasa como parámetro', () => {
    const msg = 'mensaje saludo';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
