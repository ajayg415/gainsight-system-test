import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Card from './../card';


const defauleProps = {
  game: {
    "title": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",
    "platform": "PlayStation Vita",
    "score": 9.0,
    "genre": "Platformer",
    "editors_choice": "Y"
  }
}

const setup = (props = defauleProps, state = null) => {
  const wrapper = shallow(<Card {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('When usig Card component', () => {

  it('Card Component should be defined', () => {
    const wrapper = setup();
    expect(wrapper.find('Card')).toBeDefined();
  });

  it('Card component should have h2 tag', () => {
    const wrapper = setup();
    expect(wrapper.find('h2')).toHaveLength(1)
  })

  it('Card component header should be equal to', () => {
    const wrapper = setup();
    expect(wrapper.find('h2').at(0).text()).toEqual(defauleProps.game.title.substr(0,20))
  })

  it('Card component should have platform at span 2', () => {
    const wrapper = setup();
    expect(wrapper.find('span').at(1).text()).toEqual(defauleProps.game.platform)
  })

  it('Card component should have score at span 4', () => {
    const wrapper = setup();
    expect(wrapper.find('span').at(3).text()).toEqual(defauleProps.game.score.toString())
  })

  it('Card component should have genre at span 6', () => {
    const wrapper = setup();
    expect(wrapper.find('span').at(5).text()).toEqual(defauleProps.game.genre)
  })

});