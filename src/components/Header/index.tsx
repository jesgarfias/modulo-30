import styled from "../Header/styled.module.css"
import { JSX } from "react"; 
import { useRef } from "react";
import Logo from "../Icons/Logo";
import { HeaderContainer, HeaderLink, HeaderLinkContainer, HeaderLogoContainer, HeaderLogoText, HeaderNav } from "./styled";

const Header =():JSX.Element=>{
    const navRef=useRef<HTMLElement | null>(null)
    const showNav=()=>{
        console.log(navRef.current)
        navRef.current?.classList.toggle("show")
    }
    return(
        <HeaderContainer>
            <HeaderLogoContainer>
                <Logo/>
                <HeaderLogoText>
                    <h1 style={{margin:'0', fontSize:'1.5em',color:'#6CA9C7'}}>Clinica Rangel</h1>
                    <span>Estas en buenas manos</span>
                </HeaderLogoText>
            </HeaderLogoContainer>
        
            <HeaderNav ref={navRef}>
                <HeaderLinkContainer>
                    <HeaderLink to="/">Inicio</HeaderLink>
                </HeaderLinkContainer>
                <HeaderLinkContainer>
                    <HeaderLink to="/directory" >Directorio</HeaderLink>
                </HeaderLinkContainer>
                <HeaderLinkContainer>
                    <HeaderLink to="/departments">Departamentos</HeaderLink>
                </HeaderLinkContainer>
                <button  onClick={showNav}>close</button>
            </HeaderNav>
            <button onClick={showNav}>open</button>
        </HeaderContainer>
    )
}
export default Header;