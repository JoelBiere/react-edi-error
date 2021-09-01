import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { cardsLoaded } from '../../actions/actions';
import store from '../../store';

import Footer from '../Footer';
import DetailsPane from './DetailsPane';

import Placeholder from './Placeholder';
import FilterPane from './FilterPane'
import TabBar from '../TabBar'
import AlternateTabBar from '../AlternateTabBar'


const Body = () => {

    useEffect(() => store.dispatch(cardsLoaded()), [])



    const detailsRequested = useSelector(state => state.cardsReducer.detailsShown)

    const cardChosen = useSelector(state => state.cardsReducer.displayedCard)



    return (
        <Container fluid={true}>

            <Row xs="7">
                <Col xs='2' style={{ background:"#DEE2E6" }}>
                    <FilterPane></FilterPane>
                </Col>

                <Col xs="10">
                    <AlternateTabBar></AlternateTabBar>
                    
                </Col>
            </Row>
            
            <Row>
                <Col xs="2" style={{ background: "#15181a" }}>
                    <p style={{color:'white'}}>Something could go here</p>
                </Col>
                <Col >
                    {detailsRequested ?
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