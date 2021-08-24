import styled from 'styled-components'


const Card = styled.div`
    height: auto;
    width: auto;
    border: 2px solid black;
    border-radius: 8px;
    grid-area: card;
    
    display: grid;
    grid-template-areas:
    "label   label   date"
    "empty   err     empty"
    "company empty   price";


`

export default Card