import { createDispatchHook, TypedUseSelectorHook, useDispatch as useDispatchRedux, useSelector as useSelectorRedux } from "react-redux";
import { AppDispatch, RootState, TDispatch } from "../services/types/types";


export const useDispatch = () => useDispatchRedux<AppDispatch>();
// export const useDispatch = () => createDispatchHook<AppDispatch>()

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;