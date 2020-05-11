import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'

import App from './../App';

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
  setData: jest.fn()
}

const setup = (props = defauleProps, state = null) => {
  const wrapper = shallow(
    <Provider store={store}><App {...props} /></Provider>)
  if (state) wrapper.setState(state);
  return wrapper;
}

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Using App Component', () => {

  it('App Component Should be Defined', () => {
    const wrapper = setup();
    expect(wrapper.find('App')).toBeDefined();
  });
  
});
