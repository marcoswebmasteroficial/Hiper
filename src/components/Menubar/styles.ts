import styled from 'styled-components'



export const Container = styled.div`
display: flex;
justify-content: space-between;
height: 42px;
background: #192135;
border-bottom: 2px solid #141a2a;
margin:0;
border-radius: 3px 3px 0 0;

h2{
    color: #fff;
    font-size:15px;
    font-weight: 400;
    line-height: 40px;
}
`
export const Buttons = styled.div`
float: right;
justify-content: space-between;
align-items: center;
display: flex;
-webkit-app-region: no-drag;
svg{
    font-size: 25px;
    fill: #fff;
}
button{
    width: 40px;
    height: 100%;
    padding: 5px;
    border: none;
    background: transparent;
    outline: none;
    cursor:pointer;

}
`

export const Minimize = styled.button`
&:hover {
    background: rgba(221, 221, 221, 0.2);
}
svg{
    position: relative;
    bottom: -10px;
}
`
export const Closed = styled.button`
&:hover {
    background: #f52341;
}
svg{
    position: relative;
    top: 3px;
}
`