import styled from 'styled-components'

const ErrPane = styled.div`
    resize: horizontal;
    overflow: auto;
    background: #457b9d;
    min-width: 220px;
    max-width: 50vw;
    height: 89vh;
    margin: 10px;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(150px, 4vh));
    position: relative;
    gap: 13px;
`

export default ErrPane