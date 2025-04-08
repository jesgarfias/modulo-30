import { useEffect, useRef, useState } from "react";
import { JSX } from "react";
import Clinic from "../SliderData/SliderItems";
import { ImageContainer, ImageStyled, InfoContainer, MainContainer, NextArrow, PrevArrow, SliderContainer, SliderElementContainer, UlItemsContainer } from "./styled";
import { data } from "react-router-dom";

const BannerSection =():JSX.Element=>{
    const SliderListRef=useRef<HTMLUListElement | null>(null);
    const [currentIndex, setCurrentIndex]=useState(0);
    useEffect (()=>{
        const listNode = SliderListRef.current;
        if (listNode!==null){
            const imageNodo= listNode.querySelectorAll("li")[currentIndex]
                if (imageNodo){
            imageNodo.scrollIntoView({
                behavior:"smooth"
            });
            }
        }
    },[currentIndex])

    const scroll= (direction:any)=>{
        if(direction==='prev'){
            setCurrentIndex(c=>{
                const leftPosition= currentIndex===0;
                return leftPosition ? 0 : c-1
            });

        }else{
            const rigthPosition=currentIndex===Clinic.length-1;
            if(!rigthPosition){
                setCurrentIndex(currentIndex+1)
            }
            };
        }
    
    return(
        <MainContainer>
        <SliderContainer>
            <PrevArrow onClick={()=>scroll('prev')}>Prev</PrevArrow>
            <NextArrow onClick={()=>scroll('next')}>Next</NextArrow>
            <SliderElementContainer>
                <UlItemsContainer ref={SliderListRef}>
                    {Clinic.map((item)=>{
                        return(
                            <li key={item.id}>
                                <ImageStyled src={item.img} alt="clinica" />
                            </li>
                        )
                    })}
                </UlItemsContainer>
            </SliderElementContainer>
        </SliderContainer>
    </MainContainer>
    )
}
export default BannerSection;