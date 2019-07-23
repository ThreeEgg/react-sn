import {combineReducers} from "redux-immutable";
import commons from "./commons/reducer";
import enjoy from "./enjoy/reducer"

const reducer = combineReducers({
    commons,enjoy
})

export default reducer;