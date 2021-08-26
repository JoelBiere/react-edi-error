import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { cardsLoaded } from '../../actions/actions';
import store from '../../store';
import ErrCard from '../ErrorCards/ErrCard';
import Footer from '../Footer';
import DetailsPane from './DetailsPane';
import ErrPane from './ErrPane';
import Placeholder from './Placeholder';


const Body = () => {
    store.dispatch(cardsLoaded())

    const errCardData = useSelector(state => state.cardsReducer.errCards)

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