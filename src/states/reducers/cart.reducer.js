const initializeState = {
  total: 0,
  carts: []
}

export const cartReducer = (state = initializeState, action) => {
  switch (action.type) {
    case 'SET_TOTAL': {
      return {
        ...state,
        total: action.payload
      }
    }
    case 'ADD_CART': {
      return {
        ...state,
        carts: action.payload
      }
    }
    case 'REMOVE_CART': {
      return {
        ...state,
        carts: action.payload
      }
    }
    default:
      return state
  }
}