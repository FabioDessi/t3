import { shallowMount, mount } from '@vue/test-utils';
import GameBoard from '../../src/components/GameBoard';

describe('GameBoard.vue', () => {
  const propsData = {
    board: [0, 'X', 'O', 0, 0, 0, 0, 0, 0],
  };

  it('renders a table with 3 rows and 9 columns', () => {
    const wrapper = shallowMount(GameBoard, { propsData });
    expect(wrapper.find('table').exists()).toBe(true);
    expect(wrapper.findAll('tr').length).toBe(3);
    expect(wrapper.findAll('td').length).toBe(9);
  });

  it('render an empty column if the corresponding array value is 0', () => {
    const wrapper = shallowMount(GameBoard, { propsData });
    console.log(wrapper.findAll('td'));
    expect(wrapper.findAll('td').at(0).text()).toBe('');
  });

  it('render the value if the corresponding array value is not 0', () => {
    const wrapper = shallowMount(GameBoard, { propsData });
    console.log(wrapper.findAll('td'));
    expect(wrapper.findAll('td').at(1).text()).toBe('X');
    expect(wrapper.findAll('td').at(2).text()).toBe('O');
  });

  it('change value of empty cell on click', async() => {
    const wrapper = mount(GameBoard, { propsData });
    const cell = wrapper.findAll('td').at(0);
    cell.trigger('click');
    await wrapper.vm.$nextTick();
    expect(cell.text()).toBe('O')
  })
});
