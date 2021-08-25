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


const Body = () => {
    store.dispatch(cardsLoaded())

    const errCardData = useSelector(state =>
        state.errCards)

    return (
        <Container fluid = {true}>
            <Row>
                <Col xs= "auto">
                    <ErrPane>
                        {errCardData.map(errData => <ErrCard{...errData}></ErrCard>)}
                    </ErrPane>
                </Col>

                <Col>
                    <DetailsPane >

                    </DetailsPane>
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