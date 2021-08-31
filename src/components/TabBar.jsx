import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import classnames from 'classnames'
import ErrCard from '../components/ErrorCards/ErrCard';
import ErrPane from './screens/ErrPane';
import store from '../store';
import * as imcc from '../actions/imcOperatingCompanies'
import { detailsToggled, operatingCompanyChanged } from '../actions/actions';
import './TabBarStyles.css'


const TabBar = () => {
    const [activeTab, setActiveTab] = useState(imcc.ALL);

    let errCardsShowing = useSelector(state => state.cardsReducer.errCardsShowing);
    
    let currentOperatingCompany = useSelector(state => state.cardsReducer.operatingCompany);
    
    const toggle = (operatingCompany) => {
        

        if (activeTab !== operatingCompany) {
            setActiveTab(operatingCompany);

            //to change ErrCards state AND change detailsRequested State
            store.dispatch(operatingCompanyChanged(operatingCompany))
            
        }
    }


    return (

        <div>
            <Nav tabs>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.ALL, navLink: true })}
                        onClick={() => { toggle(imcc.ALL); }}
                    >
                        All Operating Companies
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.DNJ, navLink: true })}
                        onClick={() => { toggle(imcc.DNJ); }}
                        
                    >
                        DNJ
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.AIS, navLink: true })}
                        onClick={() => { toggle(imcc.AIS); }}
                    >
                        AIS
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.GIS, navLink: true })}
                        onClick={() => { toggle(imcc.GIS); }}
                    >
                        GIS
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.HM, navLink: true })}
                        onClick={() => { toggle(imcc.HM); }}
                    >
                        {'H&M'}
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.IMCG, navLink: true })}
                        onClick={() => { toggle(imcc.IMCG); }}
                    >
                        IMCG
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.OIS, navLink: true })}
                        onClick={() => { toggle(imcc.OIS); }}
                    >
                        OIS
                    </NavLink>
                </NavItem>
                <NavItem className="tabItem">
                    <NavLink
                        className={classnames({ active: activeTab === imcc.PDS, navLink: true })}
                        onClick={() => { toggle(imcc.PDS); }}
                    >
                        PDS
                    </NavLink>
                </NavItem>
            </Nav>


            <TabContent activeTab={activeTab}>

                <TabPane tabId={currentOperatingCompany}>
                    <Row>
                        <Col style={{background: "#DEE2E6"}} >
                            <ErrPane>
                                {errCardsShowing.map(errData => <ErrCard{...errData}></ErrCard>)}
                            </ErrPane>
                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
        </div>
    )
}

export default TabBar