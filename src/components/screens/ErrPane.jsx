import styled from 'styled-components'

const ErrPane = styled.div`
    resize: vertical;
    overflow: auto;
    padding-right: 15px;
    padding-left: 15px;
    background: #457b9d;
    height: 35vh;
    min-height: 18vh;
    max-height: 80vh;
    /* width: 100%auto;
    min-width: 40px; */
    margin-bottom: 10px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(120px, 120px));
    gap: 25px 25px;
`

export default ErrPane