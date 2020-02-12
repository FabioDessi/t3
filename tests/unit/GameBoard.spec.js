import { shallowMount } from '@vue/test-utils';
import GameBoard from '../../src/components/GameBoard';

describe('GameBoard.vue', () => {
  const propsData = {
    board: Array.from(Array(9).keys()),
    gameOver: false,
    playerTurn: true,

  };
  propsData.board[1] = 'X';
  propsData.board[2] = 'O';
  const onClickHandler = jest.fn();

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

  it('empty column have click event listener and calls onCLickHandler method', async() => {
    const wrapper = shallowMount(GameBoard, { propsData, methods: { onClickHandler }});
    const cell = wrapper.findAll('span').at(0);
    cell.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
    expect(onClickHandler).toHaveBeenCalled();
  });
});
