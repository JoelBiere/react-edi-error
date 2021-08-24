export const increment = (numOfIncrement) =>{
    return{
        type: 'INCREMENT',
        payload: numOfIncrement
    }
}

export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}