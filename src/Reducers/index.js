import {combineReducers} from "redux";
import authReducer from "./auth";
import currentuserReducer from "./currentUser";
import channelReducers from './channel';
import videoReducer from './Video';
import likedVideoReducer from './likedVideo';
import watchLaterReducer from './watchLater';
import HistoryReducer from './history';
import commentReducer from "./comments";
export default combineReducers({
    authReducer,
    currentuserReducer,
    channelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,commentReducer
});