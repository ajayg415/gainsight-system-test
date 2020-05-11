import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Paginator = props => {
  const { paginationlength, currentPage, updateCurrentPage, goToPrev, goToNext } = props;
  const pagArray = new Array(paginationlength).fill('cards')

  const clickArrow = bool => {
    if(bool){
      if(currentPage !== 1){
        goToPrev()
      }
    }else{
      if(currentPage !== paginationlength){
        goToNext()
      }
    }
  }
  return (
    <div className="row">
      <ul className="pagination">
        <li className={(currentPage === 1)?'disabled':''}><a href="#!" onClick={()=>clickArrow(true)}>&#60;</a></li>

        {pagArray.map((p, i) => {
          return <li key={i} onClick={()=>updateCurrentPage(i+1)} className={(i+1 === currentPage)? 'active': ''}><a href="#!">{i+1}</a></li>
        })}

        <li className={(currentPage === paginationlength)?'disabled':''}><a href="#!" onClick={()=>clickArrow(false)}>&#62;</a></li>
      </ul>
    </div>
  )
};

Paginator.propTypes = {
  paginationlength: PropTypes.number.isRequired, 
  currentPage: PropTypes.number.isRequired,
  updateCurrentPage: PropTypes.func.isRequired,
  goToPrev: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired
}



export default Paginator;