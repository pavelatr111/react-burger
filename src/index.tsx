import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/rootRaducer";
import { BrowserRouter } from "react-router-dom";
import { socketMiddleware } from "./utils/socketMiddleware";
import { getCookie } from "./utils/token";
import {TWsActions, WS_CONNECTION_CLOSED, WS_CONNECTION_DISCONNECT, WS_CONNECTION_ERROR, WS_CONNECTION_OPEN, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE}from "./services/actions/wsAction"

export const wsUrl = 'wss://norma.nomoreparties.space/orders';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (o: any) => typeof compose;
  }
}

const wsActions = {
    onStart: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_OPEN,
    onSuccess: WS_CONNECTION_SUCCESS,
    onClosed: WS_CONNECTION_CLOSED,
    onDisconnect: WS_CONNECTION_DISCONNECT,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
  }; 

const wsMiddleware = socketMiddleware(wsActions);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    wsMiddleware
))

export const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
