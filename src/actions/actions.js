import * as actions from './actionTypes'
import * as alerts from './alertTypes'
import data from '../dummyData'

//THIS IS WHERE THE API CALL WOULD BE MADE FOR DATA--REPLACE 'data' with the API DATA

let serverData = data

export const cardsLoaded = () => {
    return {
        type: actions.CARDS_LOADED,
        payload: serverData
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
    //AXIOS PUT REQUEEST--CHANGE DEPARTMENT
    
    return {
        type: actions.CARD_REASSIGNED,
        payload: {
            idOfToReassign: id,
            newDepartment: department
        }
    }
}

export const cardResolved = (id) => {
 //AXIOS PUT REQUEST-- CHANGE ISRESOLVED

    return {
        type: actions.CARD_RESOLVED,
        payload: {
            idOfResolved: id
        }
    }
}

//alerts
export const dismissAlert = () => {
    return{
        type: actions.dismiss_alert
    }
}

export const cardResolvedAlert = (id) => {
    return{
        type: actions.card_resolved_alert,
        payload: {
            id,
            alertType: alerts.RESOLVED_ALERT,
            color: "success"
        }
    }
}

export const cardReassignedAlert = (newDepartment, id, oldDepartment) => {
    return{
        type: actions.card_reassigned_alert,
        payload: {
            id,
            alertType: alerts.REASSIGNED_ALERT,
            newDepartment,
            oldDepartment,
            color: "warning"
        }
    }
}