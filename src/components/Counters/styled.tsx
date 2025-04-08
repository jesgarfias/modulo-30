import styled from "styled-components";
const CountersMainContainer=styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;    
    background-color:#d9d9d9 ;
    @media screen and (max-width:750px) {
        flex-direction: column;
    }
`
const CounterCardContainer=styled.div`
    flex-basis: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    &:not(:last-child)::before{
        content: '';
        position: absolute;
        width: 4px;
        height: 4rem;
        background-color: #6CA9C7;
        top: 50%;
        transform: translateY(-50%);
        right: -4rem;
        @media screen and (max-width:1250px) {
        right: -2rem;
        }
        @media screen and (max-width:1125px) {
        right: -1rem;
        }
        @media screen and (max-width:750px) {
            display: none;
        }
    }
`
export {
    CountersMainContainer,
    CounterCardContainer
}