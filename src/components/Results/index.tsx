import { Link } from "react-router-dom";
import { JSX } from "react"; 
import Laboratory from "../Icons/Laboratory";
import { ResultsCart, ResultsContainer, ResultsImageContainer, ResultsTitleContainer } from "./styled"
import Xrays from "../Icons/Xrays";

const Results=():JSX.Element=>{
    return(
        <>
            <ResultsTitleContainer>
                <h2>Consulta tus Resultados</h2>
            </ResultsTitleContainer>
            <ResultsContainer>
                <ResultsCart>
                    <span>Estudios de laboratorio</span>
                    <h2>Laboratorio</h2>
                    <p>Consulta aquí tus análisis clínicos y de diagnóstico. Conoce todos los estudios de rutina y especiales.</p>
                    <ResultsImageContainer>
                        <Laboratory/>
                        <Link to="/LaboratoryRs" style={{textDecoration:'none', color:'#212121', fontSize:'1.2em'}}>Consulta</Link>
                    </ResultsImageContainer>
                </ResultsCart>
                <ResultsCart>
                    <span>Estudios de imagenologia</span>
                    <h2>Rx ultrasonido</h2>
                    <p>Consulta aquí los resultados de: Rayos X, Ultrasonido, Mamografías y Resonancia Magnética.</p>
                    <ResultsImageContainer>
                        <Xrays/>
                        <Link to="/ImageRs" style={{textDecoration:'none', color:'#212121', fontSize:'1.2em'}}>Consulta</Link>
                    </ResultsImageContainer>
                </ResultsCart>
                <ResultsCart>
                    <span>Estudios tomograficos</span>
                    <h2>Tomografía computarizada</h2>
                    <p>Consulta aquí tus resultados de tomografía de forma rápida y segura desde cualquier lugar.</p>
                    <ResultsImageContainer>
                        <Xrays/>
                        <Link to="/XraysRs" style={{textDecoration:'none', color:'#212121', fontSize:'1.2em'}}>Consulta</Link>
                    </ResultsImageContainer>
                </ResultsCart>
            </ResultsContainer>
        </>
    )
}
export default Results;