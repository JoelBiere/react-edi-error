import * as actions from '../actions/actionTypes'

export function cardsReducer(state = {}, action) {
    switch(action.type){
        case(actions.CARD_RESOLVED):
            return state

        case(actions.CARDS_LOADED):
            return {
                ...state,
                errCards: action.payload
            }
        case(actions.CARD_SELECTED):
            return {
                ...state,
                displayedCard: action.payload
            }
        case(actions.CARD_REASSIGNED):
            let currentCard = action.payload
            console.log('this is the currentCard' + currentCard)
            return {
                ...state,
                displayedCard: action.payload.department
            }
            
        default:
            return state;
    }     
}

export function detailsReducer(state = false, action) {
    switch(action.type){
        case(actions.DETAILS_RENDERED):
            return true
        default:
            return state
    }
}