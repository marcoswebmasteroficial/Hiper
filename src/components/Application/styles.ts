import styled from 'styled-components'



export const Container = styled.div`
display: grid;
grid-template-areas: 'nav main';
grid-template-columns: 125px auto;
`
export const Content = styled.div`
grid-area: main;
background: #202940;
max-height: 600px;
border-radius: 0 0 3px 0;
`
export const Fotter = styled.div`
background: #192135;
    border-top: 2px solid #141a2a;
    justify-content: space-between;
    height: 42px;
    padding: 4px;
    color: #ffff;
    text-align: right;
`
