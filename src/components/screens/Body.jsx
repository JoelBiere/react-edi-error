import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Body = () => {
    return(
        <Container>
            <Row>
                <Col>This is the Error Stack</Col>
                <Col>This is the Error Details</Col>
            </Row>
        </Container>
    )
}

export default Body;