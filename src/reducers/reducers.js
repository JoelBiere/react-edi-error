import * as actions from '../actions/actionTypes'

const initialState = {
    errCards: [],
    displayedCard: {},
    cardChosenID: undefined

}

export function cardsReducer(state = initialState, action) {
    switch(action.type){
        case(actions.CARDS_LOADED):
            return {
                ...state,
                errCards: action.payload
            }
        case(actions.CARD_SELECTED):
            return {
                ...state,
                displayedCard: action.payload,
                cardChosenID: action.cardChosenID 
            }
        case(actions.CARD_REASSIGNED):
            // let cardToReassign = action.payload
            // cardToReassign[0].department = action.newDepartment 
            
            return {
                ...state
            }
            
        default:
            return state;
    }     
}

export function detailsReducer(state = false, action) {
    switch(action.type){
        case(actions.DETAILS_RENDERED):
            return{
                ...state,
            detailsShown:true

            }
        default:
            return state
    }
}