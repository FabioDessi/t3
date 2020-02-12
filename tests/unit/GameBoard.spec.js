import { shallowMount } from '@vue/test-utils';
import GameBoard from '../../src/components/GameBoard';

describe('GameBoard.vue', () => {
  const propsData = {
    board: Array.from(Array(9).keys()),
  };
  propsData.board[1] = 'X';
  propsData.board[2] = 'O';

  it('renders a table with 3 rows and 9 columns', () => {
    const wrapper = shallowMount(GameBoard, { propsData });
    expect(wrapper.find('table').exists()).toBe(true);
    expect(wrapper.findAll('tr').length).toBe(3);
    expect(wrapper.findAll('td').length).toBe(9);
  });

  it('render an empty column if the corresponding array value is a number', () => {
    const wrapper = shallowMount(GameBoard, { propsData });
    expect(wrapper.findAll('td').at(0).text()).toBe('');
  });

  it('render the value if the corresponding array value is not a number', () => {
    const wrapper = shallowMount(GameBoard, { propsData });
    expect(wrapper.findAll('td').at(1).text()).toBe('X');
    expect(wrapper.findAll('td').at(2).text()).toBe('O');
  });

  it('change value of empty cell on click', async() => {
    const wrapper = shallowMount(GameBoard, { propsData });
    const cell = wrapper.findAll('td').at(0);
    cell.trigger('click');
    await wrapper.vm.$nextTick();
    expect(cell.text()).toBe('O')
  })
});
