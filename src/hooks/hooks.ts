import { TypedUseSelectorHook, useDispatch as useDispatchRedux, useSelector as useSelectorRedux } from "react-redux";
import { RootState, TDispatch } from "../services/types/types";


export const useDispatch = () => useDispatchRedux<TDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;