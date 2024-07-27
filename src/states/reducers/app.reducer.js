const initializeState = {
  theme: 'light',
  user: null,
  isLoading: false,
  access_token: null
}

export const appReducer = (state = initializeState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.payload
      }
    }
    case 'SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'HIDE_LOADING': {
      return {
        ...state,
        isLoading: false
      }
    }
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return state
  }
}