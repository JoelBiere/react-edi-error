import * as actions from './actionTypes'
import data from '../dummyData'

//THIS IS WHERE THE API CALL WOULD BE MADE FOR DATA--REPLACE 'data' with the API DATA


export const cardsLoaded = () => {
    return {
        type: actions.CARDS_LOADED,
        payload: data
    }
}


export const cardSelected = (id) => {
    return {
        type: actions.CARD_SELECTED,
        payload: data.find(obj => obj.errorID === id ),
        cardChosenID: id
    }
}

export const detailsRendered = () => {
    return {
        type: actions.DETAILS_RENDERED
    }
}

export const cardReassigned = (department, id) => {
    //find the card, update the department return data
    let updated_card = data.find(element => element.errorID == id)
    updated_card.department = department
    console.log(updated_card)

    return {
        type: actions.CARD_REASSIGNED,
        payload: data
    }
}