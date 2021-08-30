import * as actions from '../actions/actionTypes'

const initialState = {
    errCards: [],
    displayedCard: {},
    cardChosenID: undefined,
    resolvedCards: [],
    detailsShown: false

}

export function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case (actions.CARDS_LOADED):
            return {
                ...state,
                errCards: action.payload.filter(obj => !obj.isResolved),
                resolvedCards: action.payload.filter(obj => obj.isResolved)
            }
        case (actions.CARD_SELECTED):
            return {
                ...state,
                displayedCard: action.payload,
                cardChosenID: action.cardChosenID
            }
        case (actions.CARD_REASSIGNED):
            let cardChanged = state.errCards.find(obj => obj.errorID == action.payload.idOfToReassign)
            console.log(cardChanged)
            return {
                ...state,
                errCards: state.errCards.map(obj => obj.errorID !== action.payload.idOfToReassign ? obj : { ...obj, department: action.payload.newDepartment }),
                displayedCard: { ...state.displayedCard, department: action.payload.newDepartment }
            }

        case (actions.DETAILS_RENDERED):
            return {
                ...state,
                detailsShown: true
            }

        case (actions.CARD_RESOLVED):

            let updatedSet = state.errCards.map(obj => obj.errorID !== action.payload.idOfResolved ? obj : { ...obj, isResolved: true })

            return {
                ...state,
                resolvedCards: [...state.resolvedCards, updatedSet.find(obj => obj.isResolved)],
                errCards: updatedSet.filter(obj => !obj.isResolved),
                displayedCard: { ...state.displayedCard, isResolved: true },
                detailsShown: false
            }



        default:
            return state;
    }
}

let alertsInitialState = {
    isShown: false,
    details: {}
}
export function alertsReducer(state = alertsInitialState, action) {
    switch (action.type) {
        case (actions.card_resolved_alert):
            return {
                ...state, 
                isShown: true,
                details: { ...state.details, 
                    id: action.payload.id,
                    alertType: action.payload.alertType,
                    color: action.payload.color
                }
            }

        case(actions.dismiss_alert):
            return{
                ...state,
                isShown: false
            }

        case(actions.card_reassigned_alert):
            return{
                ...state,
                isShown: true,
                details: { ...state.details,
                    alertType: action.payload.alertType,
                    id: action.payload.id,
                    newDepartment: action.payload.newDepartment,
                    oldDepartment: action.payload.oldDepartment,
                    color: action.payload.color
                }
            }

        default:
            return state
    }

}
