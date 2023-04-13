
import type { Middleware, MiddlewareAPI } from 'redux';
import { TWsActions, wsConnectionClosed, wsConnectionError, wsConnectionOpen, wsConnectionStart, wsConnectionSuccess, wsGetMessage, WS_CONNECTION_OPEN, WS_CONNECTION_START } from '../services/actions/wsAction';
import { AppDispatch, RootState, TwsActionType } from '../services/types/types';


const WS_СLOSE_NORMAL = 1000;

export const socketMiddleware = (wsActions: TwsActionType): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
      let socket: WebSocket | null = null;
      let timerWsReconnect = 0;
      let isWsConnected = false;
      let url = '';

      
      return next => (action: TWsActions) => {
        const { dispatch } = store;
  
        if (action.type === WS_CONNECTION_START) {
          url = action.payload;
          socket = new WebSocket(url);
          
          isWsConnected = true;
          window.clearTimeout(timerWsReconnect);
          dispatch(wsConnectionSuccess()) 
        }
        if (socket) {
          socket.onopen = () => {
            dispatch(wsConnectionOpen());
          };
  
          socket.onclose = event => {
            if(event.code !== WS_СLOSE_NORMAL){
              dispatch(wsConnectionClosed());
              socket?.close();
            }
            if (isWsConnected) {
              dispatch(wsConnectionSuccess());
              timerWsReconnect = window.setTimeout(() => {
                dispatch(wsConnectionStart(url));
              }, 3000)
            }
          };
  
          socket.onmessage = event => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            dispatch(wsGetMessage(restParsedData));
          };
  
          socket.onerror = event => {
            dispatch(wsConnectionError('Error in websocket'));
          };
  
        //   if (action.type === wsActions.onDisconnect) {
        //     window.clearTimeout(timerWsReconnect);
        //     isWsConnected = false;
        //     timerWsReconnect = 0;
        //     socket.close();
        //     dispatch(wsConnectionClosed());
        //   }
        }
        next(action);
      };
    };
  };