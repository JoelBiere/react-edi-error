import * as actions from './actions/actionTypes'

export default function reducer(state = {}, action) {
    switch(action.type){
        case(actions.CARD_RESOLVED):
            return state

        case(actions.CARDS_LOADED):
            return {
                ...state,
                errCards: action.payload
            }
            
        default:
            return state;
    }
        
}