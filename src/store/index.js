import { createStore } from "redux";
import { reducer } from "../reducers";

export const { subscribe, getState, dispatch } = createStore(reducer);
