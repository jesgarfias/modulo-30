import styled from "styled-components";
const InfoMainContainer=styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 1rem;
@media screen and (max-width: 900px){
    flex-direction: column;
    gap: 0.8rem;
}
`
const DescriptionContainer=styled.div`
    text-align: justify;
    width: 40%;
    font-size: 1.2em;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`
const ImageContainer=styled.div`
    width: 45%;
    border-radius: 15px;
    @media screen and (max-width: 900px){
        width: 65%;
    }
    @media screen and (max-width:500px){
        width: 90%;
    }
`
const ImageItem=styled.img`
    width: 100%;
    border-radius: 15px;
`
const BtnContainer=styled.div`
    display: flex;
    margin: 1rem 1rem;
    justify-content: space-around;
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }

`
const BtnTitle=styled.h2`
    cursor: pointer;
    text-align: center;
    width: 28%;
    @media screen and (max-width:600px){
        width: 90%;
    }
`
export {InfoMainContainer,
        BtnContainer,
        DescriptionContainer,
        ImageContainer,
        ImageItem,
        BtnTitle
}