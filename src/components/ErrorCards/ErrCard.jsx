import styled from 'styled-components'


const ErrCard = () => {
    return (
        <Card>
            <DepartmentLabel>
                Operations
            </DepartmentLabel>

            <Date>
                8.23.2021
            </Date>

            <ErrID>
                103444
            </ErrID>

            <CompanyLabel>
                FedEx
            </CompanyLabel>

            <Price>
                $10000
            </Price>
        </Card>

    )
}
const Card = styled.div`
    display: grid;
    margin: 10px;
    border: 2px solid white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    background: lightgray;
    text-align: center;
    grid-template-areas:
    "dptLabel dptLabel date"
    "err err err"
    "company company price";

`
const DepartmentLabel = styled.div`
    grid-area: dptLabel;
    background: lightgreen;
`
const ErrID = styled.div`
    grid-area: err;
    font-size: large;
    background-color: lightcyan;
`
const Date = styled.div`
    color: black;
    grid-area: date;
    background: lightblue;
`

const Price = styled.div`
    grid-area: price;
    background: #ee4a35;
`

const CompanyLabel = styled.div`
    grid-area: company;
    background: lightsalmon;
`

export default ErrCard