import { combineReducers, createStore } from "redux";

import { appReducer } from "./states/reducers/app.reducer";
import { cartReducer } from "./states/reducers/cart.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  carts: cartReducer,
});

export const store = createStore(rootReducer);


/* rootReducer
state = {
  app:  {
    theme: 'light',
    user: null,
    isLoading: false,
    access_token
  },
  carts: {
    total: 0,
    carts: []
  },
}

// component A -> state.app.theme



*/