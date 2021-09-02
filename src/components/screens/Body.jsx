import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { cardsLoaded } from '../../actions/actions';
import store from '../../store';
import AlternateTabBar from '../AlternateTabBar';
import Footer from '../Footer';

const Body = () => {

    useEffect(() => store.dispatch(cardsLoaded()), [])



    

    return (
        <Container fluid={true}>

            <Row>
                    <AlternateTabBar></AlternateTabBar> 
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