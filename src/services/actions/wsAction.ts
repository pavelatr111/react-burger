import { TwsOrderType } from "../types/types-api";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_OPEN: 'WS_CONNECTION_OPEN' = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_CONNECTION_DISCONNECT: 'WS_CONNECTION_DISCONNECT' = 'WS_CONNECTION_DISCONNECT';


interface IMessage {
    orders: TwsOrderType[],
    total: number ,
    totalToday: number 
  }

export interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    payload: string;
  }
  export interface IWsConnectionOpenAction {
    readonly type: typeof WS_CONNECTION_OPEN;
  }
  
  export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
  }
  
  export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    payload: string;
  }
  
  export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
  }
  
  export interface IWsGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    payload: IMessage;
  }
  export interface IWsConnectionDisconnectAction {
    readonly type: typeof WS_CONNECTION_DISCONNECT;
  }

 
  
  export type TWsActions =
    | IWsConnectionStart
    | IWsConnectionSuccessAction
    | IWsConnectionErrorAction
    | IWsConnectionClosedAction
    | IWsGetMessageAction
    | IWsConnectionOpenAction
    | IWsConnectionDisconnectAction


export const wsConnectionStart = (url: string): IWsConnectionStart => {
    return {
      type: WS_CONNECTION_START,
      payload: url
    }
  } 
  
  export const wsConnectionOpen = (): IWsConnectionOpenAction => {
    return {
      type: WS_CONNECTION_OPEN,
    }
  }
  
  export const wsConnectionSuccess = (): IWsConnectionSuccessAction => {
    return {
      type: WS_CONNECTION_SUCCESS,
    }
  }
  
  export const wsConnectionClosed = (): IWsConnectionClosedAction => {
    return {
      type: WS_CONNECTION_CLOSED
    }
  } 
  
  export const wsConnectionError = (error: string): IWsConnectionErrorAction => {
    return {
      type: WS_CONNECTION_ERROR,
      payload: error
    }
  } 
  
  export const wsGetMessage = (message: IMessage): IWsGetMessageAction => {
    return {
      type: WS_GET_MESSAGE,
      payload: message
    }
  } 

  export const wsConnectionDisconnect = (): IWsConnectionDisconnectAction => {
    return {
      type: WS_CONNECTION_DISCONNECT
    }
  } 