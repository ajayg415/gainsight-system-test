import actionTypes from './actionTypes'

export const storeGamesdata = payload => ({
  type: actionTypes.STORE_GAMES_DATA,
  payload
})

export const showGamesData = payload => ({
  type: actionTypes.SHOW_GAMGES_DATA,
  payload
})

export const updateCurrentScreen = payload =>  ({
  type: actionTypes.UPDATE_CURRENT_SCREEN,
  payload
})

export const setCardsPerScreen = payload => ({
  type: actionTypes.CARDS_PER_SCREEN,
  payload
})

export const setSortKey = payload => ({
  type: actionTypes.SET_SORT_KEY,
  payload
})

export const setSortOrder = payload => ({
  type: actionTypes.SET_SORT_ORDER,
  payload
})

export const setSearchString = payload => ({
  type: actionTypes.SET_SEARCH_STRING,
  payload
})