import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import ReassignButton from '../ReassignButton';
import './DetailsPane.css';

const DetailsPane = (props) => {
    
    return (
        <Container className='mainContainer'>
            <div className='topButtons'>
                <Button color="success">mark as resolved</Button>{' '}
                <ReassignButton></ReassignButton>

            </div>
            <Row className='bigSection'>
                <CardBody>
                    <Card body className="text-center">
                        <CardTitle tag="h2"> Error ID: <span style={{ color: "#E63946" }}> {props[0].errorID} </span> </CardTitle>
                    </Card>
                </CardBody>
            </Row>

            <Row className='tableRow'>
                <Col sm="4" className="leftCol">IMC Company</Col>
                <Col md="8" className="rightCol"> {props[0].imcCompany}</Col>
            </Row>
            <Row className='tableRow'>
                <Col sm="4" className="leftCol"> Customer (EDI Code)</Col>
                <Col md="8" className="rightCol"> {`${props[0].customer} (${props[0].customerCode})`}</Col>
            </Row>
            <Row className="tableRow">
                <Col sm="4" className="leftCol"> Invoice Code </Col>
                <Col md="8" className="rightCol"> {props[0].invoiceCode} </Col>
            </Row>
            <Row className="tableRow">
                <Col sm="4" className="leftCol"> Date Error Occurred </Col>
                <Col md="8" className="rightCol"> {props[0].errorDate} </Col>
            </Row>
            <Row className="tableRow">
                <Col sm="4" className="leftCol"> Generated Error Message </Col>
                <Col md="8" className="rightCol"> {props[0].errMessage} </Col>
            </Row>
            <hr></hr>

            <Row className='subSection'>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <CardSubtitle tag="h6"> What this means...</CardSubtitle>

                            <CardText className="errMsg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="tableRow">
                <Col>
                    <Card>
                        <CardBody>
                            <CardSubtitle tag="h6">Possible Solutions</CardSubtitle>
                            <CardText>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Curabitur eget tellus odio. Praesent posuere lorem non nisl ullamcorper, a commodo dui interdum.</li>
                                    <li>Nam et ultricies enim. Sed luctus lorem vitae condimentum mollis. Suspendisse efficitur tortor ac felis consequat, vitae ultricies justo elementum. Proin lobortis libero at arcu efficitur pellentesque. Mauris sed ante malesuada, condimentum eros vestibulum, elementum dolor.</li>
                                    <li>Etiam ipsum ex, suscipit at ex non, porta ullamcorper sapien. Pellentesque condimentum, dui et laoreet lobortis, felis neque venenatis nulla, in convallis velit justo sed eros. Integer convallis gravida condimentum. Sed volutpat elit risus, a dapibus metus imperdiet quis</li>
                                </ol>

                            </CardText>
                        </CardBody>
                    </Card>

                </Col>
            </Row>

        </Container>
    )
}

export default DetailsPane;






