import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderContainer=styled.header`
    background-color: #d9d9d9;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1;
    @media screen and (max-width:700px) {
        justify-content: space-between;
    }
`
const HeaderLogoContainer=styled.section`
    display: flex;
    width: 25%;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
`
const HeaderLogoText=styled.section`
    display: flex;
    flex-direction: column;
@media screen and (max-width: 1080px){
    display: none;
}
`
const HeaderNav= styled.nav`
    display: flex;
    width:75%;
    justify-content: space-around;
    align-items: center;
`

const HeaderLink=styled(Link)`
    color: #000000;
    text-decoration: none;
    font-size: 1.5em;
    padding: 0.5rem;
    border-radius: 10px;
    position: relative;
    &:before{
        content: '';
        position: absolute;
        width: 0px;
        height: 5px;
        background-color: #6CA9C7;
        top: 100%;
        left: 0;
        transition: .5s;
    }
`
const HeaderLinkContainer=styled.div`
    &:hover{
        ${HeaderLink}:before{
            width: 50%;
            background-color: #6CA9C7;
            transform: translateX(100%);
        }
        ${HeaderLink}{
            color: #6CA9C7;
        }
    }
`


export {
    HeaderContainer,
    HeaderLogoContainer,
    HeaderLogoText, 
    HeaderNav,
    HeaderLink,
    HeaderLinkContainer
};