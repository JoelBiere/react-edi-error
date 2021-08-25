import * as actions from './actionTypes'
import data from '../dummyData'

//THIS IS WHERE THE API CALL WOULD BE MADE FOR DATA--REPLACE 'data' with the API DATA


export const cardsLoaded = () => {
    return {
        type: actions.CARDS_LOADED,
        payload: data
    }
}