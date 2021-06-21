import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/";
import reducer from "./albumsReducer";
import albumsReducer from "./albumsReducer";
import photosReducer from "./photosReducer";


const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    albums: albumsReducer,
    photos: photosReducer
})

const store = createStore (rootReducer, applyMiddleware(thunk, logger))

export default store;