import styled from 'styled-components'

const ErrPane = styled.div`
    resize: horizontal;
    overflow: auto;
    background: silver;
    width: 33%;
    margin: 10px;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr, 2fr));
    grid-template-rows: repeat(auto-fill, minmax(2fr, 8fr));
    grid-template-areas:
        "header header card"
        "card card card";
    grid-gap: 10px;

`

export default ErrPane