import { put } from "redux-saga/effects";
import axios from 'axios';

import actionTypes from './../actions/actionTypes'

function* fetchGames(action) {
  try {
    console.log(process.env.REACT_APP_GAMES_URL)
    const response = yield axios.get('http://starlord.hackerearth.com/gamesarena');
    yield put({
      type: actionTypes.STORE_GAMES_DATA,
      payload: response.data.filter(d=>(Object.values(d).length===5))
    });
  } catch (error) {
    console.log('errro occued in sagas');
  }
}

export default fetchGames;