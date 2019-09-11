import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./reducer";
import { watchFetchDog } from "./sagas";
import Dog from "./Dog";
// Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchDog);
// Container component
ReactDOM.render(
  <Provider store={store}>
    <Dog />
    <App />
  </Provider>,
  document.getElementById("root")
);
