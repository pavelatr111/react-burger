import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers/rootRaducer';

// Инициализируем хранилище с помощью корневого редьюсера
// const store = createStore(rootReducer, compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    // Оборачиваем приложение компонентом Provider из пакета react-redux
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)