import { Container, Row, Col, Card, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import './DetailsPane.css'


const DetailsPane = (props) => {
    return (
        <Container className='mainContainer'>
            <Row className='bigSection'>
                <CardBody>
                    <Card body className="text-center">
                        <CardTitle tag="h2"> Error ID: <span style={{ color: "#E63946" }}> lorem ipsum </span> </CardTitle>
                    </Card>
                </CardBody>
            </Row>

            <Row className='tableRow'>
                <Col sm="4" className="leftCol">IMC Company</Col>
                <Col md="8" className="rightCol"> lorum ipsum</Col>
            </Row>
            <Row className='tableRow'>
                <Col sm="4" className="leftCol"> Customer (EDI Code)</Col>
                <Col md="8" className="rightCol"> lorum ipsum</Col>
            </Row>
            <Row className="tableRow">
                <Col sm="4" className="leftCol"> Invoice Code </Col>
                <Col md="8" className="rightCol"> lorum ipsum</Col>
            </Row>
            <Row className="tableRow">
                <Col sm="4" className="leftCol"> Date Error Occurred </Col>
                <Col md="8" className="rightCol"> lorum ipsum</Col>
            </Row>

            <Row className='subSection'>
                <Card>
                    <CardBody>


                        <CardSubtitle tag="h6"> Error Message:</CardSubtitle>
                        <CardText className="errMsg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardText>
                    </CardBody>
                </Card>
            </Row>

        </Container>
    )
}

export default DetailsPane;




