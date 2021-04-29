import styled from 'styled-components'


export const Container = styled.div`
 display: grid;
    grid-template-rows: 50px auto;
    grid-auto-columns: 100% 100%;
    padding: 10px;
    margin-top: 40%;
`
export const Search = styled.div`

`
export const Input = styled.input`
    width: 350px;
    padding: 8px 12px 10px 12px;
    border: 1px solid rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.25);
    outline:none;
    color: #ffffff;
`
export const Error = styled.div`
background: #b95842;
    padding: 5px;
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    text-align: center;
    `;
    export const Concluido = styled.div`
    background: #65b942;
        padding: 5px;
        color: #fff;
        border-radius: 3px;
        font-size: 15px;
        text-align: center;
        line-height: 23px;
        font-weight: 600;
        `;
    
export const VideoInfo = styled.div`
 display: grid;
 grid-template-columns: 168px auto;
 grid-gap: 5px;
    `;
export const Thumb = styled.div`

   `;
   export const TitleVideo = styled.div`
h2{
    color:#fff;
    font-size: 15px;
}
small{
    color:#8b8b8b
}
   `;



export const Button = styled.button`
    background: #f02c01;
    border: none;
    color: #fff;
    padding: 10px;
    width: 100px;
    height: 35px;
    position: relative;
    cursor: pointer;
    top: 1px;
    outline:none;
    &:after {
    content: '';
    background: #00000073;
    pointer-events: none;
    width: 101px;
    height: 5px;
    left: -10px;
    bottom: -6px;
    display: block;
    position: relative;
}
`