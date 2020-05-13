import { put } from "redux-saga/effects";
import axios from 'axios';

function* fetchGames(action) {
  try {
    console.log(process.env)
    const response = yield axios.get('http://starlord.hackerearth.com/gamesarena');
    yield put({
      type: 'STORE_GAMES_DATA',
      payload: response.data.filter(d=>(Object.values(d).length===5))
    });
  } catch (error) {
    console.log('errro occued in sagas');
  }
}

export default fetchGames;