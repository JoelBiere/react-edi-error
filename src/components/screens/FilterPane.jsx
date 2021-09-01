import React, {useState} from 'react'
import { Row, Col, ButtonGroup, Button, Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import { Switch } from 'antd'
import './FilterPane.css'
import 'antd/dist/antd.css';
import store from '../../store';
import { showResolvedToggled, showUnresolvedToggled } from '../../actions/actions';


const FilterPane = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    

    const toggleResolved = (checked) => {
        store.dispatch(showResolvedToggled(checked))

    }
    const toggle = () => setOpen(!dropdownOpen);

    return (
        <Container style={{paddingTop: '8px'}}>     
            <Row>
                <h6>Show</h6>
                <hr></hr>
                <ButtonGroup vertical>
                    <span> <Switch onChange={toggleResolved}></Switch>    Resolved</span> 
                    <br></br>
                </ButtonGroup>
            </Row>
            <Row>
                <span> <h6>Order by</h6>   </span>
                <hr></hr>
                <ButtonGroup vertical>
                    <span> <Button outline color="primary"  active={false}></Button>  Department</span> 
                    <span> <Button outline color="primary"  active={false}></Button>  Date</span>
                    <span> <Button outline color="primary"  active={false}></Button>  Invoice Amount</span>
                    <span> <Button outline color="primary"  active={false}></Button>  Client Company</span>    
                </ButtonGroup>
                
            </Row>

        </Container>
    )
}

export default FilterPane