import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'

import Cards from './../cards';
import Paginator from '../../paginator/paginator';

const mockStore = configureMockStore();
const store = mockStore({});

const defauleProps = {
  displayData: [{
    "title": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",
    "platform": "PlayStation Vita",
    "score": 9.0,
    "genre": "Platformer",
    "editors_choice": "Y"
  },
  {
    "title": "Splice: Tree of Life",
    "platform": "iPad",
    "score": 8.5,
    "genre": "Puzzle",
    "editors_choice": "N"
  }],
  setCards: jest.fn(),
  paginationlength: 5,
  currentPage: 2,
  setPage: jest.fn()
}

const setup = (props = defauleProps, state = null) => {
  const wrapper = shallow(
    <Provider store={store}><Cards {...props} /></Provider>)
  if (state) wrapper.setState(state);
  return wrapper;
}

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('When using Cards component', () => {
  it('Cards component should be defined', () => {
    const wrapper = setup();
    expect(Cards).toBeDefined();
  });

  it('Should load paginator component when its length is greater than Zero', () => {
    const wrapper = setup();
    expect(Paginator).toBeDefined();
  })
});