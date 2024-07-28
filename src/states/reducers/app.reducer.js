const initializeState = {
  theme: 'light',
  user: null,
  isLoading: false,
  access_token: null,
  count: 0
}

export const appReducer = (state = initializeState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.payload
      }
    }
    case 'INCEREMENT': {
      return {
        ...state,
        count: state.count +  action.payload.count
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload.isLoading
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
        user: action.payload.user
      }
    }
    default:
      return state
  }
}