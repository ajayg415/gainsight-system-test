import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'materialize-css'

import Filter from './../filter/filter'
import Cards from '../cards/cards'

import './App.css';

const App = props => {
  const { setData, displayData } = props;

  return (
    <div className="App container">
      <header className="App-header">
        Gainsight Case study: Games Arena
      </header>
      { displayData && <Filter />}
      { displayData && <Cards />}
    </div>
  );
}

App.propTypes = {
  displayData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = state => ({
  displayData : state.gamesReducer.displayData
})

export default connect(mapStateToProps)(App);
