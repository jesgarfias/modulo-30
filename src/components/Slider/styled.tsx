import styled from "styled-components";

const MainContainer=styled.section`
    width: 60%;
    height: 400px;
    border: 1px solid #1111;
    margin: 4rem auto;
`
const SliderContainer=styled.section`
    width: 100%;
    height: 100%;
    position: relative;
`
const SliderElementContainer=styled.section`
    width: 100%;
    height: 100%;
    border: 1px solid #111;
    border-radius: 20px;
    overflow: hidden;
`
const InfoContainer=styled.li`
    display: flex;
    justify-content: space-around;
    list-style: none;
`
const ImageContainer=styled.div`
    width: 40%;
`
const ImageStyled=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`
const PrevArrow=styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 32px;
    font-weight: 600;
    cursor: pointer;
`
const NextArrow=styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 32px;
    font-weight: 600;
    cursor: pointer;
`
const UlItemsContainer=styled.ul`
    list-style: none;
    padding: 0%;
    margin: 0%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    display: inline-flex;
`
export { 
    MainContainer,
    SliderContainer,
    InfoContainer,
    ImageContainer,
    ImageStyled,
    SliderElementContainer,
    PrevArrow,
    NextArrow,
    UlItemsContainer
}