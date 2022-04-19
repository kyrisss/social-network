import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleWare from "redux-thunk"
import appReducer from "./appReducer.ts";

let reducers = combineReducers({
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;