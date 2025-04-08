import styled from "styled-components";
const AbuotUsContainer=styled.section`
    display: flex;
    width: 90%;
    margin: 1rem auto;
    justify-content: space-evenly;
    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
    
    }
`
const AbuotUsTextContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: justify;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`
const TextInfo=styled.h2`
    margin: 0;
    font-size: 2.5em;
    color: #567199;
    @media screen and (max-width: 900px){
        text-align: center;
    }
`
const TextSp=styled.p`
    font-size: 1.25em;
    font-weight: 500;
    color: #434343;
    @media screen and (max-width: 900px){
        text-align: center;
    }
`
const AbuotUsImgContainer=styled.div`
    width: 50%;
    @media screen and (max-width: 900px){
        width: 65%;
    }
`
const TextContainer=styled.div`
    width: 85%;
    @media screen and (max-width: 900px){
        width: 100%;
    }
`
const AboutUsImg=styled.img`
    width: 100%;
    border-radius: 10px;
`
export{
    AbuotUsContainer,
    AbuotUsTextContainer,
    TextInfo,
    TextSp,
    AbuotUsImgContainer,
    AboutUsImg,
    TextContainer
}