import { AboutUsImg, AbuotUsContainer, AbuotUsImgContainer, AbuotUsTextContainer, TextContainer, TextInfo, TextSp } from "./styled";
import hospital from "../../assets/hospital.jpg"

const AboutUs=()=>{
    return(
        <AbuotUsContainer>
            <AbuotUsTextContainer>
                <TextContainer>
                    <TextInfo>Clinica Rangel</TextInfo>
                    <TextSp>Estas en buenas manos</TextSp>
                </TextContainer>
                <TextContainer>
                    <p>Hospital Angeles Health System es una institución médica de prestigio nacional que cuenta con más de 55 especialidades, instalaciones equipadas, tecnología de vanguardia y un equipo de profesionales comprometidos con el bienestar y la salud de sus pacientes.</p>
                </TextContainer>
            </AbuotUsTextContainer>
            <AbuotUsImgContainer>
                <AboutUsImg src={hospital} alt="clinica"/>
            </AbuotUsImgContainer>
        </AbuotUsContainer>
    )
}
export default AboutUs;