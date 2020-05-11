import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCardsPerScreen, updateCurrentScreen } from './../../store/actions'

import Paginator from './../paginator/paginator'
import Card from './card'
import './cards.css';

const Cards = props => {
  const { displayData, setCards, paginationlength, currentPage, setPage } = props;

  useEffect(() => {
    const width = window.innerWidth;
    if(width > 992){
      setCards(12)
    }else if(width > 600){
      setCards(9)
    }else{
      setCards(6)
    }
  }, []);

  const updateCurrentPage = page => {
    setPage(page);
  }

  const goToPrev = () => {
    setPage(currentPage-1)
  }

  const goToNext = () => {
    setPage(currentPage+1)
  }

  return (
    <React.Fragment>
      <div className="row cards">
        {displayData.map((game, index) => {
          return <Card game={game} key={`${game.genre}_${index}`} />
        })}
      </div>

      { paginationlength>0 && 
        <Paginator 
          paginationlength={paginationlength} 
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
          goToPrev={goToPrev}
          goToNext={goToNext}/> 
      }
    </React.Fragment>
  )
}

Cards.propTypes = {
  displayData:PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
  })).isRequired, 
  setCards: PropTypes.func.isRequired,
  paginationlength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  displayData : state.gamesReducer.displayData,
  paginationlength : state.gamesReducer.paginationlength,
  currentPage : state.gamesReducer.currentPage
})

const mapDispatchToProps = dispatch => ({
  setCards: data => dispatch(setCardsPerScreen(data)),
  setPage: data => dispatch(updateCurrentScreen(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);