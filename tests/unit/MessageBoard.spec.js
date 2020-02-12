import { shallowMount } from '@vue/test-utils'
import MessageBoard from '../../src/components/MessageBoard.vue'

describe('MessageBoard.vue', () => {
  const propsData = {
    gameWon: {index: null, player: 'Tie Game'},
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
    expect(wrapper.find('.message-board__header').text()).toEqual(propsData.gameWon.player)
  });

  it('renders a button with restart game value', () => {
    propsData.show = true;
    const wrapper = shallowMount(MessageBoard, { propsData });
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('.message-board__button').text()).toEqual('Restart game')
  });

  it('calls onClickHandler method when button is pressed', () => {
    propsData.show =  true;
    const onClickHandler = jest.fn();
    const wrapper = shallowMount(MessageBoard, { propsData, methods: { onClickHandler } });
    wrapper.find('button').trigger('click');
    expect(onClickHandler).toHaveBeenCalled();
  })
});
