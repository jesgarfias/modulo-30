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
    @media screen and (max-width: 750px) {
        width: 90%;
    }
`
const InputBox=styled.input`
    width: 60%;
    border-radius: 5px;
`
const ComentsBox=styled.textarea`
    width: 60%;
    border-radius: 5px;
`
const BtnForm=styled.button`
    width: 50%;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #567199 ;
        color: #cdcdcd;
        transition: 0.5s all ease;
    }
`
export{
    FormMainContainer,
    InputBox,
    ComentsBox,
    BtnForm
}