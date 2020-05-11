import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'

import Filter from './../filter';

const mockStore = configureMockStore();
const store = mockStore({});

const defauleProps = {
  gamesData: [{
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
  setSort: jest.fn(),
  setOrder: jest.fn(),
  setSearch: jest.fn()
}

const setup = (props = defauleProps, state = null) => {
  const wrapper = shallow(
    <Provider store={store}><Filter {...props} /></Provider>)
  if (state) wrapper.setState(state);
  return wrapper;
}

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('When using Filter Component', () => {
  it('Filter should be defined', () => {
    expect(Filter).toBeDefined();
  })
})