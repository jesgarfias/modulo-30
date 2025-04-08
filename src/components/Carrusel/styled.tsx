import styled from "styled-components";
const CarruselMainContainer=styled.section`
    width: 80%;
    height: 400px;
    margin: 1rem auto;
`
const CarruselSliderContainer=styled.section`
    width: 100%;
    height: 100%;
    position: relative;
`

const CarruselInfoContainer=styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    background-color: #00000080;
`
const InfoContainer=styled.div`
    position: absolute;
    width: 20%;
    left: 40%;
    top: auto;
    text-align: center;
    color: #d9d9d9;
    @media screen and (max-width:750px){
        width: 40%;
        left: 29%;
    }
`
const CarruselImg=styled.img`
    width: 100%;
    object-fit: cover;
`
const PrevArrow=styled.p`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 32px;
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
`
const NextArrow=styled.p`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 32px;
    font-weight: 600;
    cursor: pointer;
    z-index: 1;
`
const ArrowBtn=styled.div`
    position: absolute;
    font-size: 2rem;
    top: 50%;
    transform: translate(0,-50%);
    background-color: #798ca3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`
export {
    CarruselMainContainer,
    CarruselSliderContainer,
    CarruselImg,
    CarruselInfoContainer,
    InfoContainer,
    NextArrow,
    PrevArrow,
    ArrowBtn
}