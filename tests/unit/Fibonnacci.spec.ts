import {shallowMount} from '@vue/test-utils'
import Fibonnacci from "@/components/Fibonnacci.vue";

describe('Fibonnacci.vue', () => {
    it('Renders title', () => {
        const wrapper = shallowMount(Fibonnacci)
        expect(wrapper.text()).toContain('Fibonnacii')
    })
})
