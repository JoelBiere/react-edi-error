import React, { useState } from 'react';
import ErrCard from '../ErrorCards/ErrCard';
import ErrPane from './ErrPane';
import { addData } from '../../actions/index'
import { connect } from 'react-redux'


const Body = ({ addData, data }) => {
    
    const generateCards = () => {

        for(let obj of data) {
            console.log(obj)
        }
        return ''
    }
    return (
        <React.Fragment>
            {window.onload = addData}
            <ErrPane>
                {generateCards()}
            </ErrPane>



        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({ data: state.data })

const mapDispatchToProps = (dispatch) => {
    return {
        addData: () => dispatch(addData)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);