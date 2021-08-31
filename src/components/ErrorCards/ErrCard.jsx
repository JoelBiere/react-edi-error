import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { cardSelected, detailsToggled } from '../../actions/actions'
import store from '../../store'


const ErrCard = (props) => {
    
    const detailsRequested = useSelector(state => state.cardsReducer.detailsShown)

    const handleCardSelect = () =>{
        store.dispatch(cardSelected(props.errorID))
        if(!detailsRequested){
            store.dispatch(detailsToggled())
        }
        
    }

    const selectedCardID = useSelector(state => state.cardsReducer.cardChosenID)

    if(selectedCardID === props.errorID){
        return(
             <SelectedCard onClick={handleCardSelect} >
            
            <DepartmentSection>
                {generateDepartmentLabel(props.department)}
            </DepartmentSection>

            <Date>
                {props.errorDate}
            </Date>

            <ErrID>
                Error {props.errorID}
            </ErrID>

            <CompanyLabel>
                {props.customer}
            </CompanyLabel>

            <Price>
                {props.price}
            </Price>
        </SelectedCard>

        )
       

    }
    return (
        <UnselectedCard onClick={handleCardSelect} >
            
            <DepartmentSection>
                {generateDepartmentLabel(props.department)}
            </DepartmentSection>

            <Date>
                {props.errorDate}
            </Date>

            <ErrID>
                Error {props.errorID}
            </ErrID>

            <CompanyLabel>
                {props.customer}
            </CompanyLabel>

            <Price>
                {props.price}
            </Price>
        </UnselectedCard>

    )
}

export const generateDepartmentLabel = (department) =>{
    switch(department){
        case("Operations"):
            return <DepartmentLabel style = {{background:"#ce6b1a"}}>Operations</DepartmentLabel>
        case("EDI Team"):
            return <DepartmentLabel style = {{background:"#1d3557"}}>EDI Team</DepartmentLabel> 
        case("Accounting"):
            return <DepartmentLabel style = {{background:"#e63946"}}>Accounting</DepartmentLabel> 
        default:
            return <DepartmentLabel> {department} </DepartmentLabel>
    }

}


const UnselectedCard = styled.div`
    display: grid;
    margin: 10px;
    box-shadow: 0 4px 8px 0px #bbb7b7fc;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: 0 6px 16px #ffffff;
    }

    background: #f1faee;
    text-align: center;
    grid-template-areas:
    "dptLabel dptLabel date"
    "err err err"
    "company company price";

`

const SelectedCard = styled.div`
    display: grid;
    margin: 10px;
    box-shadow: 0 4px 8px 0px #bbb7b7fc;
    transition: 0.3s;
    animation-name: grow;
    animation-fill-mode: forwards;
    animation-duration: .3s;
    @keyframes grow {
        from { transform: scale(1);}
        to { 
            transform: scale(1.2);
            background: #a8dadc;
            font: large;
        
        }
    }
    
    cursor: pointer;
    &:hover {
        box-shadow: 0 6px 16px #ffffff;
    }

    background: #f1faee;
    text-align: center;
    grid-template-areas:
    "dptLabel dptLabel date"
    "err err err"
    "company company price";
`
const DepartmentSection = styled.div`
    grid-area: dptLabel;

`
const DepartmentLabel = styled.span`
    background: #e76f51;
    margin-left: 0px;
    margin-top: 0px;
    padding: 4px;
    border: 2px solid black;
    color: white;
`
const ErrID = styled.div`
    grid-area: err;
    font-size: large;
`
const Date = styled.div`
    grid-area: date;
`

const Price = styled.div`
    grid-area: price;
    color: #e63946;

`

const CompanyLabel = styled.div`
    grid-area: company;
`
export default ErrCard