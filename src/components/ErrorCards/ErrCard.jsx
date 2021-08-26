import styled from 'styled-components'
import { cardSelected, detailsRendered } from '../../actions/actions'
import store from '../../store'


const ErrCard = (props) => {

    const handleCardSelect = () =>{
        store.dispatch(cardSelected(props.errorID))
        store.dispatch(detailsRendered())
    }

    
    return (
        <Card onClick={handleCardSelect}>
            
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
        </Card>

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


const Card = styled.div`
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
const DepartmentSection = styled.div`
    grid-area: dptLabel;

`
const DepartmentLabel = styled.div`
    background: #e76f51;
    margin-left: 0px;
    margin-top: 0px;
    border: 2px solid white;
    color: white;
`
const ErrID = styled.div`
    grid-area: err;
    font-size: large;
`
const Date = styled.div`
    color: black;
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