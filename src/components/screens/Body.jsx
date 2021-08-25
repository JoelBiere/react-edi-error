import React from 'react';
import ErrCard from '../ErrorCards/ErrCard';
import ErrPane from './ErrPane';
import { useSelector } from 'react-redux'
import { cardsLoaded } from '../../actions/actions';
import store from '../../store';


const Body = () => {
    store.dispatch(cardsLoaded())

    const errCardData = useSelector(state=> 
        state.errCards)

    console.log(errCardData)
    return (
        <React.Fragment>
            <ErrPane>
                { errCardData.map(errData => <ErrCard{...errData}></ErrCard>)}
            </ErrPane>



        </React.Fragment>
    )
}


export default Body;