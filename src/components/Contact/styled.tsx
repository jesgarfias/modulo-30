import styled from "styled-components";
const FormMainContainer=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 40%;
    background-color:#6CA9C7;
    margin: 1rem auto;
    padding: 0.8rem;
    border-radius: 5px;
    @media screen and (max-width:1024px) {
        width: 65%;
    }
    @media screen and (max-width: 750px) {
        width: 90%;
    }
`
const InputBox=styled.input`
    width: 60%;
    border-radius: 5px;
    outline: none;
    border: none;
`
const ComentsBox=styled.textarea`
    width: 60%;
    border-radius: 5px;
`
const BtnForm=styled.button`
    width: 50%;
    border-radius: 5px;
    border: solid 2px #567199;
    cursor: pointer;
    &:hover{
        background-color: #567199 ;
        color: #cdcdcd;
        border: solid 2px #cdcdcd;
        transition: 0.5s all ease;
    }
`
export{
    FormMainContainer,
    InputBox,
    ComentsBox,
    BtnForm
}