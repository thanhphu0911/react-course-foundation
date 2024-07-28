export const changeTheme = (theme) => {
  return {
    type: 'CHANGE_THEME',
    payload: theme
  }
}

export const setUser = (user) => {
  return {
    type: 'CHANGE_THEME',
    payload: {
      user
    }
  }
}

export const showLoading = () => {
  return {
    type: 'SHOW_LOADING',
  }
}

export const setLoading = (isLoading) => {
  return {
    type: "SET_LOADING",
    payload: {
      isLoading
    }
  }
}

export const incrementCount = (count) => {
  return {
    type: "INCEREMENT",
    payload: {
      count
    }
  }
}
