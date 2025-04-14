import { JSX } from "react"; 
import { useRef } from "react";
import styles from "../Header/Navbarstyle.module.css"
import Logo from "../Icons/Logo";
import { HeaderContainer, HeaderLink, HeaderLinkContainer, HeaderLogoContainer, HeaderLogoText, HeaderNav } from "./styled";
import BtnMenu from "../Icons/BtmMenu";
import CloseBtn from "../Icons/CloseBtn";

const Header =():JSX.Element=>{
    const navRef=useRef<HTMLElement | null>(null)
    const showNav=()=>{
        console.log(navRef.current)
        navRef.current?.classList.toggle(styles.show)
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
        
            <HeaderNav ref={navRef} className={styles.nav}>
                <HeaderLinkContainer>
                    <HeaderLink to="/">Inicio</HeaderLink>
                </HeaderLinkContainer>
                <HeaderLinkContainer>
                    <HeaderLink to="/directory" >Directorio</HeaderLink>
                </HeaderLinkContainer>
                <HeaderLinkContainer>
                    <HeaderLink to="/departments">Departamentos</HeaderLink>
                </HeaderLinkContainer>
                <button className={styles.CloseBtn} onClick={showNav}><CloseBtn/></button>
            </HeaderNav>
            <button className={styles.btn} onClick={showNav}><BtnMenu/></button>
        </HeaderContainer>
    )
}
export default Header;