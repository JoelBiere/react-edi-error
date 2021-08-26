import React, { useState } from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


const ReassignButton = () => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} color="secondary">
            <DropdownToggle caret>
                reassign to
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem disabled> Current Department</DropdownItem>
                <DropdownItem>department1</DropdownItem>
                <DropdownItem>department2</DropdownItem>
                <DropdownItem>department3</DropdownItem>
                <DropdownItem>department4</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )

}

export default ReassignButton