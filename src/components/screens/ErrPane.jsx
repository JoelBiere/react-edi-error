import styled from 'styled-components'

const ErrPane = styled.div`
    resize: horizontal;
    overflow: auto;
    background: silver;
    height: 95vh;
    width: 33%;
    margin: 10px;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(100px, .5fr));
    grid-gap: 10px;
    position: relative;
`

export default ErrPane