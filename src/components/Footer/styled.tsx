import styled from "styled-components";
const FooterContainer=styled.footer`
    padding: 1rem;
    background-color: #d9d9d9;
    display: flex;
    justify-content: space-evenly;
`
const InfoFooterContainer=styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`
const ElementFooterContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export{
    FooterContainer,
    InfoFooterContainer,
    ElementFooterContainer
}