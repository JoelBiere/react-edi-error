import { combineReducers } from "redux";
import { cardsReducer, detailsReducer } from "./reducers";


 const rootReducer = combineReducers({
    cardsReducer,
    detailsReducer
})

export default rootReducer