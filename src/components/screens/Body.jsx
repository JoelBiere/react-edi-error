import React from 'react';
import ErrCard from '../ErrorCards/ErrCard';
import ErrPane from './ErrPane';
import { useSelector } from 'react-redux'
import { cardsLoaded } from '../../actions/actions';
import store from '../../store';
import DetailsPane from './DetailsPane';
import styled from 'styled-components'
import Footer from '../Footer'
import { Container, Row, Col } from 'reactstrap';
import Placeholder from './Placeholder'


const Body = () => {
    store.dispatch(cardsLoaded())

    const errCardData = useSelector(state =>
        state.cardsReducer.errCards)
    
    

    const detailsRequested = useSelector(state => state.detailsReducer)
   
    
    const cardChosen = useSelector(state => state.cardsReducer.displayedCard)
    

    return (
        <Container fluid = {true}>
            <Row>
                <Col xs= "auto">
                    <ErrPane>
                        {errCardData.map(errData => <ErrCard{...errData}></ErrCard>)}
                    </ErrPane>
                </Col>

                <Col>
                { detailsRequested ? 
                    <DetailsPane {...cardChosen} > </DetailsPane>
                    :
                    <Placeholder></Placeholder>
                    }
                    
                </Col>

            </Row>

            <Row>
                <Footer>
                    this is the footer
                </Footer>
            </Row>
        </Container>

    )
}

export default Body;