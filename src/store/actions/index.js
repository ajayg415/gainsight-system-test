export const storeGamesdata = payload => ({
  type: 'STORE_GAMES_DATA',
  payload
})

export const showGamesData = payload => ({
  type: 'SHOW_GAMGES_DATA',
  payload
})

export const updateCurrentScreen = payload =>  ({
  type: 'UPDATE_CURRENT_SCREEN',
  payload
})

export const setCardsPerScreen = payload => ({
  type: 'CARDS_PER_SCREEN',
  payload
})

export const setSortKey = payload => ({
  type: 'SET_SORT_KEY',
  payload
})

export const setSortOrder = payload => ({
  type: 'SET_SORT_ORDER',
  payload
})

export const setSearchString = payload => ({
  type: 'SET_SEARCH_STRING',
  payload
})