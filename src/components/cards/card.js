import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css'
import './cards.css'

const Card = props => {
  const { game } = props;
  const { title, platform, score, genre } = game;

  return (
    <div className="col s6 m4 l3">
      <div className="card blue-grey lighten-1 hoverable">
        <div className="card-content card-header">
          <h2 className="card-title truncate"><strong>{title.substr(0,20)}</strong></h2>
        </div>
        <div className="card-content card-body">
          <ul>
            <li>
              <span className='label'><strong>Platform: </strong></span><br/>
              <span>{platform}</span>
            </li>
            <li>
              <span className='label'><strong>Score: </strong></span><br/>
              <span>{score}</span>
            </li>
            <li>
              <span className='label'><strong>Genre: </strong></span><br/>
              <span>{genre}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  game : PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
}

export default Card;