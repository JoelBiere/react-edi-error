import NavigationBar from '../NavigationBar'
import Alerts from '../Alerts'
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const Header = () => {

    const alertShown = useSelector(state => state.alertsReducer.isShown)
    const alertDetails = useSelector(state => state.alertsReducer.details)

    return (
        <React.Fragment>
              <AlertSection>

            
{alertShown ?
    <Alerts {...alertDetails} ></Alerts>
    :
    null}
</AlertSection>
            <NavigationBar />
          
        </React.Fragment>

    )
}

const AlertSection = styled.div`
    font-size: larger;
    text-align: center;
    position: absolute;
    min-width: fit-content;
    z-index: 5;
    width: 300px;
    right: 0;




`
export default Header;

