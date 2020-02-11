import { shallowMount } from '@vue/test-utils'
import MessageBoard from '../../src/components/MessageBoard.vue'

describe('MessageBoard.vue', () => {
  const propsData = {
    message: 'baz',
    show: false
  };

  it('not renders if show if false', () => {
    const wrapper = shallowMount(MessageBoard, { propsData });
    expect(wrapper.html()).toContain('')
  });

  it('renders propsData.message in h1 tag if show is true', () =>{
    propsData.show = true;
    const wrapper = shallowMount(MessageBoard, { propsData });
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('.message-board__header').text()).toEqual(propsData.message)
  });

  it('renders a button with restart game value', () => {
    propsData.show = true;
    const wrapper = shallowMount(MessageBoard, { propsData });
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('.message-board__button').text()).toEqual('Restart game')
  })
});
