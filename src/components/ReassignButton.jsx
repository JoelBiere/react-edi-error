import React, { useState } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import * as department from '../ImcDepartments'
import store from '../store';
import { cardReassigned } from '../actions/actions'

const ReassignButton = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    
    const handleReassign = (updatedDepartment, id) =>{

        store.dispatch(cardReassigned(updatedDepartment, id))
    }

    const generateOtherItems = () => {
        let departments = {}
        Object.assign(departments, department)
        let otherDepartments = []
        for(let key in departments) {
            if(departments.hasOwnProperty(key)){
                if( department[key] !== props.department){
                    otherDepartments.push(department[key])
                }
            }
        }
        return otherDepartments.map(otherDepartment => <DropdownItem >{otherDepartment}</DropdownItem>)
        //onClick={handleReassign(otherDepartment, props.errorID )}
    }

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} color="secondary">
            <DropdownToggle caret> reassign to </DropdownToggle>
            <DropdownMenu>
                <DropdownItem disabled> {props.department} </DropdownItem>
                {generateOtherItems()}
                {/* <DropdownItem onClick={handleReassign("Accounting", props.errorID)}>Testing 123</DropdownItem> */}
            </DropdownMenu>
        </ButtonDropdown>
    )

}

export default ReassignButton