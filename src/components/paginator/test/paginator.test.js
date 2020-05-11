import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Paginator from './../paginator';


const defaultProps = {
  paginationlength: 5, 
  currentPage: 1,
  updateCurrentPage: jest.fn(),
  goToPrev: jest.fn(),
  goToNext: jest.fn()
}

const setup = (props = defaultProps, state = null) => {
  const wrapper = shallow(<Paginator {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('When using Paginator Component', () => {
  it('Paginator component should be defined', () => {
    expect(Paginator).toBeDefined();
  })

  it('Should have <li/> tags', () => {
    const wrapper = setup();
    expect(wrapper.find('li')).toHaveLength(defaultProps.paginationlength+2);
  })

  it('Should have active class', () => {
    const wrapper = setup();
    expect(wrapper.find('li').at(defaultProps.currentPage).hasClass('active')).toBe(true);
  })

  it('Previos page icon should be disabled when we\'re in firstPage', () => {
    const wrapper = setup();
    expect(wrapper.find('li').at(0).hasClass('disabled')).toBe(true);
  })
})