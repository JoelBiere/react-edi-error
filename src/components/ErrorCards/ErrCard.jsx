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
            
            <DepartmentLabel>
                department
            </DepartmentLabel>

            <Date>
                {props.errorDate}
            </Date>

            <ErrID>
                {props.errorID}
            </ErrID>

            <CompanyLabel>
                {props.customerCode}
            </CompanyLabel>

            <Price>
                {props.price}
            </Price>
        </Card>

    )
}



const Card = styled.div`
    display: grid;
    margin: 10px;
    border: 2px solid white;
    box-shadow: 0 4px 8px 0 #f3eeeefd;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: 0 px 16px 0 #ffffff;
    }

    background: #f1faee;
    text-align: center;
    grid-template-areas:
    "dptLabel dptLabel date"
    "err err err"
    "company company price";

`
const DepartmentLabel = styled.div`
    grid-area: dptLabel;
    background: lightblue;
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