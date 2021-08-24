import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';
import ErrCard from '../ErrorCards/ErrCard'
import ErrPane from './ErrPane'
import ErrPnHeader from '../ErrorCards/ErrPnHeader';


const Body = () => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <ErrPane>
                <ErrCard />
                <ErrCard />
                <ErrCard />
                <ErrCard />
                <ErrCard />
                <ErrCard />

            </ErrPane>


            {/* <Row>
                        <button onClick={() => dispatch(increment(3))} >+</button>
                        <button onClick = {() => dispatch(decrement())}>-</button>

                    </Row> */}

        </React.Fragment>
    )
}

export default Body;