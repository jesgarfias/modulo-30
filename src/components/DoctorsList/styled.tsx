import styled from "styled-components";

const ListContainer=styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
`
const ElementsListContainer=styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 3rem;
    margin: 1rem 0rem;
`
const CardElement=styled.section`
    flex-basis: 300px;
    border: 1px solid #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6CA9C7;
    cursor: pointer;
    &:hover{
        transform: translateY(-1rem);
        transition: transform 0.5s;
    }
`
const imageContainer=styled.div`
    display: flex;
    align-items: center;
`
const ListImage=styled.img`
    width: 100%;
`
const MainBaner=styled.section`
    width: 70%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
`
const ImageBaner=styled.img`
    width: 100%;
    border-radius: 10px;
`
const BannerTitle=styled.h1`
    position: absolute;
    right: 35%;
    bottom: 10px;
    font-size: 2em;
`
const InputSectionContainer=styled.div`
    background-color:#d9d9d9;
    margin: 2rem auto;
    width: 60%;
    height: 150px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputSection=styled.input`
    width: 90%;
`
export {
    ListContainer,
    ElementsListContainer,
    CardElement,
    imageContainer,
    ListImage, 
    MainBaner,
    ImageBaner,
    BannerTitle,
    InputSection,
    InputSectionContainer
}