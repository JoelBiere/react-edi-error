import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { cardResolved, cardResolvedAlert } from '../../actions/actions';
import store from '../../store';
import { generateDepartmentLabel, Resolved } from '../ErrorCards/ErrCard';
import ReassignButton from '../ReassignButton';
import './DetailsPane.css';
import {Result, Button as ResultButton} from 'antd';

const DetailsPane = (props) => {

    const handleResolve = () => {
        store.dispatch(cardResolved(props.errorID))
        store.dispatch(cardResolvedAlert(props.errorID))
    }
    const isResolved = props.isResolved
    
    return (
        <React.Fragment>
            <Container className='mainContainer'>
                <Row>
                    <Col xs="4"> {generateDepartmentLabel(props.department)} </Col>
                </Row>
                <Row >
                    {isResolved ? 
                    <Result 
                    status= "success" 
                    title="Error was resolved" 
                    subTitle="Other information will go here" 
                    extra={[
                        <ResultButton type ="primary" key='unresolve'>Mark as Unresolved</ResultButton>
                    ]}
                    />
                     : 
                     <Col sm="12" md={{ size: 6, offset: 6 }}>
                        <div className='topButtons'>
                            <Button color="primary" onClick={handleResolve}>Mark as Resolved</Button>{' '}
                            <ReassignButton {...props}></ReassignButton>
                        </div>
                    </Col> }
                </Row>
                
                <Row className='bigSection'>
                    <CardBody>
                        <Card body className="text-center">
                            <CardTitle tag="h2"> Error ID: <span style={{ color: "#E63946" }}> {props.errorID} </span> </CardTitle>
                        </Card>
                    </CardBody>
                </Row>


                <Row className='tableRow'>
                    <Col sm="4" className="leftCol">IMC Company</Col>
                    <Col md="8" className="rightCol"> {props.imcCompany}</Col>
                </Row>
                <Row className='tableRow'>
                    <Col sm="4" className="leftCol"> Customer (EDI Code)</Col>
                    <Col md="8" className="rightCol"> {`${props.customer} (${props.customerCode})`}</Col>
                </Row>
                <Row className="tableRow">
                    <Col sm="4" className="leftCol"> Invoice Code </Col>
                    <Col md="8" className="rightCol"> {props.invoiceCode} </Col>
                </Row>
                <Row className="tableRow">
                    <Col sm="4" className="leftCol"> Date Error Occurred </Col>
                    <Col md="8" className="rightCol"> {props.errorDate} </Col>
                </Row>
                <Row className="tableRow">
                    <Col sm="4" className="leftCol"> Generated Error Message </Col>
                    <Col md="8" className="rightCol"> {props.errMessage} </Col>
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
        </React.Fragment>

    )
}

export default DetailsPane;






