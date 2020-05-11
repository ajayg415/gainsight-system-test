

let initialState = {
  dataFromAjax : [],
  dataCopy: [],
  displayData: [],
  currentPage: 1,
  cardsPerScreen: 12,
  paginationlength: 0,
  sortBy: '',
  sortOrder: 'asc'
}

 const gamesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'STORE_GAMES_DATA':
      return {...state, 
        dataFromAjax: action.payload, 
        dataCopy: action.payload.slice(),
        displayData: action.payload.slice(0, state.cardsPerScreen),
        paginationlength: Math.ceil(action.payload.length / state.cardsPerScreen)
      }

    case 'UPDATE_CURRENT_SCREEN':
      const startItem = state.cardsPerScreen * (action.payload-1);
      const endItem = (state.cardsPerScreen * (action.payload-1)) + state.cardsPerScreen;
      return {...state, 
        displayData: state.dataCopy.slice(startItem, endItem), 
        currentPage: action.payload
      }

    case 'CARDS_PER_SCREEN':
      return {...state, 
        cardsPerScreen: action.payload,
        paginationlength: Math.ceil(state.dataCopy.length / state.cardsPerScreen)
      }

    case 'SET_SORT_KEY':
      if(action.payload !== ""){
        let sortedData = [];
        if(typeof state.dataFromAjax[0][action.payload] === 'number')
          sortedData = state.dataCopy.sort((a,b)=>(a[action.payload] - b[action.payload]));
        else
          sortedData = state.dataCopy.sort((a,b)=>a[action.payload].localeCompare(b[action.payload]))  
        
        return {...state,
          sortBy: action.payload,
          dataCopy : sortedData,
          displayData: sortedData.slice(0, state.cardsPerScreen),
          currentPage: 1
        }
      }else{
        return{...state,
          sortBy: '',
          dataCopy: state.dataFromAjax,
          displayData: state.dataFromAjax.slice(0, state.cardsPerScreen),
          currentPage: 1
        }
      }
    
    case 'SET_SORT_ORDER':
      const sortedDataOrder = state.dataCopy.reverse();
      return {...state,
        sortOrder: action.payload,
        dataCopy : sortedDataOrder,
        displayData: sortedDataOrder.slice(0, state.cardsPerScreen)
      }

    case 'SET_SEARCH_STRING':
      if(action.payload == ''){
        return {...state,
          dataCopy : state.dataFromAjax,
          displayData: state.dataFromAjax.slice(0, state.cardsPerScreen),
          paginationlength: Math.ceil(state.dataFromAjax.length / state.cardsPerScreen)
        }
      }else{
        const filteredData = state.dataFromAjax.filter(obj => Object.values(obj).join('*').toLowerCase().indexOf(action.payload.toLowerCase())!==-1)
        return {...state,
          dataCopy: filteredData,
          displayData: filteredData.slice(0, state.cardsPerScreen),
          paginationlength: Math.ceil(filteredData.length / state.cardsPerScreen)
        }
      }
    
      default:
      return state;
 
  }
}

export default gamesReducer;