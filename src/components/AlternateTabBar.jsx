import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { operatingCompanyChanged } from '../actions/actions';
import * as imcc from '../actions/imcOperatingCompanies';
import store from '../store';
import { Row, Col } from 'reactstrap'
import ErrPane from './screens/ErrPane';
import ErrCard from '../components/ErrorCards/ErrCard';
import './AlternateTabBar.css'

const { TabPane } = Tabs;




const AlternateTabBar = () => {




    let currentOperatingCompany = useSelector(state => state.cardsReducer.operatingCompany);

    const toggle = (operatingCompany) => {
        //to change ErrCards state AND change detailsRequested State
        store.dispatch(operatingCompanyChanged(operatingCompany))


    }
    return (
        <Tabs defaultActiveKey={imcc.ALL} onChange={toggle} className='tabs'>
            <React.Fragment className='allTab'> 
                <TabPane onClick={() => { toggle(imcc.ALL); }} tab={<img src="https://www.imcc.com/images/logo.png" alt = "All Companies" id='imcImage'></img>} key={imcc.ALL}>
                    <TabContents />
                </TabPane>
            </React.Fragment>

            <TabPane key={imcc.DNJ} onClick={() => { toggle(imcc.DNJ); }} tab={ <img src="https://www.godnj.com/wp-content/uploads/sites/8/2018/12/logo-dnj.png" alt='DNJ'></img>}>
                <TabContents />
            </TabPane>

            <TabPane key={imcc.GIS} onClick={() => { toggle(imcc.GIS); }} tab={<img src='https://www.gulfintermodal.com/wp-content/uploads/sites/9/2018/12/gis-logo-top-nr.png' alt='GIS'></img>}>
                <TabContents />
            </TabPane>

            <TabPane key={imcc.AIS} onClick={() => { toggle(imcc.AIS); }} tab={<img src='https://shared.imcc.com/opco/logos/AIS-logo.png' alt='AIS'></img>}>
                <TabContents />
            </TabPane>

            <TabPane key={imcc.HM} onClick={() => { toggle(imcc.HM); }} tab={<img src = 'http://www.hmitusa.com/wp-content/uploads/sites/10/2018/12/logo-hm-top.png' alt="H&M"></img>}>
                <TabContents />
            </TabPane>

            <TabPane key={imcc.IMCG} onClick={() => { toggle(imcc.IMCG); }} tab={<img src = "https://www.imcg.com/wp-content/uploads/sites/19/2018/09/imcg-logo-nr.png" alt="IMCG"></img>}>
                <TabContents />
            </TabPane>
            
            <TabPane key={imcc.OIS} onClick={() => { toggle(imcc.OIS); }} tab={<img src= "https://www.ohiointermodalservices.com/wp-content/uploads/sites/12/2018/12/ois-logo-web.png" alt="OIS"></img>}>
                <TabContents />
            </TabPane>

            <TabPane key={imcc.PDS} onClick={() => { toggle(imcc.PDS); }} tab={<img src="https://www.pdsusa.com/wp-content/uploads/sites/20/2019/06/logo-pds-nr.png" alt="PDS"></img>}>
                <TabContents />
            </TabPane>
        </Tabs>
    );
}

const TabContents = () => {
    let errCardsShowing = useSelector(state => state.cardsReducer.errCardsShowing);
    return (
        <Row>
            <Col style={{ background: "#DEE2E6" }} >
                <ErrPane>
                    {errCardsShowing.map(errData => <ErrCard{...errData}></ErrCard>)}
                </ErrPane>
            </Col>
        </Row>
    )
}
export default AlternateTabBar