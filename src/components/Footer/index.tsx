import { HeaderLogoContainer, HeaderLogoText } from "../Header/styled";
import { JSX } from "react";
import Logo from "../Icons/Logo"; 
import { ElementFooterContainer, FooterContainer, InfoFooterContainer } from "./styled";

const Footer=():JSX.Element=>{
    return(
        <FooterContainer>
            <HeaderLogoContainer>
                <Logo/>
                <HeaderLogoText>
                    <h1 style={{margin:'0', fontSize:'2em',color:'#6CA9C7'}}>Clinica Rangel</h1>
                    <span>Estas en buenas manos</span>
                </HeaderLogoText>
            </HeaderLogoContainer>
            <InfoFooterContainer>
                <ElementFooterContainer>
                    <h2>Comunidad</h2>
                    <span>blog</span>
                    <span>Boletín mensual</span>
                    <span>Nosotros</span>
                </ElementFooterContainer>
                <ElementFooterContainer>
                    <h2>Legales</h2>
                    <span>Terminos de uso</span>
                    <span>Politicas</span>
                    <span>Aviso de privacidad</span>
                    <span>Permiso COFEPRIS</span>
                </ElementFooterContainer>
                <ElementFooterContainer>
                    <h2>Contacto</h2>
                    <span>Contactanos</span>
                    <span>Facebook</span>
                    <span>Instagram</span>
                </ElementFooterContainer>
            </InfoFooterContainer>
        </FooterContainer>
    )
}
export default Footer;