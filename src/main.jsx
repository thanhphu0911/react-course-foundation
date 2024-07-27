import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App.jsx";
import "./index.css";
import "./sampleApp/phusnyd/css/style.css";
import "./sampleApp/duy/style.css";
import "./sampleApp/nhat/style.css";
import { BrowserRouter } from "react-router-dom";

import { store } from './store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
