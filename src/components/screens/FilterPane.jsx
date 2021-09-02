import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Divider, Radio, Switch } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Col, Row, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { showResolvedToggled } from '../../actions/actions';
import store from '../../store';
import './FilterPane.css';
import { useSelector } from 'react-redux';
import { sortedByDepartment } from '../../actions/actions';

const FilterPane = (props) => {
    const toggleResolved = (checked) => {
        store.dispatch(showResolvedToggled(checked))
    }

    const radioStatus = useSelector(state => state.cardsReducer.sortedBy)
    console.log(radioStatus)


    const sortCards = (value) => {
        console.log(value)
        switch (value) {
            case ('department'):
                store.dispatch(sortedByDepartment())
                break;
            case ('errID'):
                store.dispatch()
                break;
            case ('date'):
                store.dispatch()
                break;
            case ('invoiceAmnt'):
                store.dispatch()
                break;
            case ('client'):
                store.dispatch()
                break;
            default:
                return null

        }

    }

    return (
        <Row >
            <Col xs="auto" className='filterBox' >
                <h5 className='header'>Filters</h5>

                <Divider className='header' />

                <h7 className="switchLabel"> Show Resolved </h7>

                <Switch
                    size='large'
                    style={{ width: '20%', }}
                    className='switch'
                    onChange={toggleResolved}
                    checked={useSelector(state => state.cardsReducer.includeResolved)}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}>
                </Switch>




                <h7 className='orderLabel'> Order By:</h7>
                <ButtonToolbar>
                    <ButtonGroup className='orderBy' size="sm" style={{ boxShadow: 'none' }}>
                        <Button className="btn shadow-none" outline={!radioStatus.department} color="secondary" onClick={() => sortCards('department')}>Department </Button>
                        <Button className="btn shadow-none" outline={!radioStatus.errID} color="secondary" onClick={() => sortCards('errID')}>ID</Button>
                        <Button className="btn shadow-none" outline={!radioStatus.date} color="secondary" onClick={() => sortCards('date')}>Date</Button>
                        <Button className="btn shadow-none" outline={!radioStatus.invoiceAmount} color="secondary" onClick={() => sortCards('invoiceAmnt')}>$$$</Button>
                        <Button className="btn shadow-none" outline={!radioStatus.client} color="secondary" onClick={() => sortCards('client')}>Client</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Col>

            <Col>
            </Col>
            <Col>Total Info</Col>
            <Col>Activity</Col>
        </Row>

    )
}

export default FilterPane