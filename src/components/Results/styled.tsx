import styled from "styled-components";
const ResultsTitleContainer=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color:#567199 ;
    @media screen and (max-width:450px) {
        font-size: 1em;
    }
`
const ResultsContainer=styled.section`
    display: flex;
    width: 85%;
    margin: 2rem auto;
    justify-content: space-around;
    flex-basis: 200px;
    flex-wrap: wrap;
    gap: 1.5rem;
`
const ResultsCart=styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    flex-basis: 300px;
    text-align: center;
    background-color: #6CA9C7;
    position: relative;
    cursor: pointer;
    &:hover{
        transform: translateY(-1rem);
        transition: transform 0.5s;
    }
`
const ResultsImageContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
export {
    ResultsTitleContainer,
    ResultsContainer,
    ResultsCart,
    ResultsImageContainer
}