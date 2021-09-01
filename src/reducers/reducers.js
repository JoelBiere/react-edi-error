import * as actions from '../actions/actionTypes'
import * as imcc from '../actions/imcOperatingCompanies'

const initialState = {
    errData: [],
    operatingCompany: imcc.ALL,
    errCardsShowing: [],
    includeResolved: false,
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
                errData: action.payload,
                resolvedCards: action.payload.filter(obj => obj.isResolved),
                errCardsShowing: action.payload.filter(obj => !obj.isResolved)
            }
        case (actions.CARD_SELECTED):
            return {
                ...state,
                displayedCard: state.errData.find(obj => obj.errorID === action.payload.cardChosenID),
                cardChosenID: action.payload.cardChosenID
            }
        case (actions.CARD_REASSIGNED):
            return {
                ...state,
                errData: state.errData.map(obj => obj.errorID !== action.payload.idOfToReassign ? obj : { ...obj, department: action.payload.newDepartment }),
                displayedCard: { ...state.displayedCard, department: action.payload.newDepartment },
                errCardsShowing: state.errCardsShowing.map(obj => obj.errorID !== action.payload.idOfToReassign ? obj : { ...obj, department: action.payload.newDepartment })
            }

        case (actions.DETAILS_TOGGLED):
            return {
                ...state,
                detailsShown: !state.detailsShown
            }

        case (actions.CARD_RESOLVED):

            let updatedSet = state.errData.map(obj => obj.errorID !== action.payload.idOfResolved ? obj : { ...obj, isResolved: true })

            let showingCards;
            let displayedCard;

            if (state.includeResolved) {
                showingCards = state.errCardsShowing.map(obj => obj.errorID !== action.payload.idOfResolved ? obj : { ...obj, isResolved: true })
                displayedCard = { ...state.displayedCard, isResolved: true }
            }
            else if (!state.includeResolved) {
                showingCards = state.errCardsShowing.filter(obj => obj.errorID !== action.payload.idOfResolved)
                displayedCard = undefined
            }

            return {
                ...state,
                resolvedCards: [...state.resolvedCards, updatedSet.find(obj => obj.errorID === action.payload.idOfResolved)],
                errData: updatedSet,
                displayedCard: displayedCard,
                detailsShown: false,
                errCardsShowing: showingCards
            }

        case (actions.OPERATING_COMPANY_CHANGED):
            let shownCards;

            if (action.payload.operatingCompany !== imcc.ALL ) {
                if(state.includeResolved){
                    shownCards = state.errData.filter(obj => obj.imcCompany === action.payload.operatingCompany)
                }
                else{
                    shownCards = state.errData.filter(obj => obj.imcCompany === action.payload.operatingCompany && !obj.isResolved)
                }
    
            }
            else if (state.includeResolved) {
                shownCards = state.errData
            }
            else {
                shownCards = state.errData.filter(obj => !obj.isResolved)
            }

            return {
                ...state,
                errCardsShowing: shownCards,
                operatingCompany: action.payload.operatingCompany,
                cardChosenID: undefined,
                displayedCard: {},
                detailsShown: false
            }

        case (actions.SHOW_RESOLVED_TOGGLED):

            let cardsShowing;

            if (action.payload.checked) {
                if (state.operatingCompany === imcc.ALL) {
                    cardsShowing = state.errData
                }

                else {
                    cardsShowing = state.errData.filter(obj => obj.imcCompany === state.operatingCompany)
                }

            }
            else if (!action.payload.checked && state.operatingCompany === imcc.ALL) {
                cardsShowing = state.errData.filter(obj => !obj.isResolved)
            }
            else if (!action.payload.checked) {
                cardsShowing = state.errData.filter(obj => !obj.isResolved && obj.imcCompany === state.operatingCompany)
            }


            return {
                ...state,
                includeResolved: action.payload.checked,
                errCardsShowing: cardsShowing
            }

        case (actions.SHOW_UNRESOLVED_TOGGLED):
            return {
                ...state,
                includeResolved: action.payload.checked
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
                details: {
                    ...state.details,
                    id: action.payload.id,
                    alertType: action.payload.alertType,
                    color: action.payload.color
                }
            }

        case (actions.dismiss_alert):
            return {
                ...state,
                isShown: false
            }

        case (actions.card_reassigned_alert):
            return {
                ...state,
                isShown: true,
                details: {
                    ...state.details,
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
