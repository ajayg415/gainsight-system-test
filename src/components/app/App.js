import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'materialize-css'

import { storeGamesdata } from './../../store/actions';
import { fetchAllData } from './../utils'

import Filter from './../filter/filter'
import Cards from '../cards/cards'

import './App.css';

const App = props => {
  const { setData, displayData } = props;

  useEffect(()=> {
    (async () => {
      const data = await fetchAllData()
      const filterData = data.filter(d=>(Object.values(d).length===5));
      setData(filterData);
    })()
  },[]);

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
  setData: PropTypes.func.isRequired,
  displayData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
  })).isRequired
}

const mapDispatchToProps = dispatch => ({
  setData: data => dispatch(storeGamesdata(data))
});

const mapStateToProps = state => ({
  displayData : state.gamesReducer.displayData
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
