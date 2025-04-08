import { CarruselSliderContainer, CarruselMainContainer, CarruselImg, CarruselInfoContainer, ArrowBtn, InfoContainer } from "./styled";
import { JSX } from "react";
import Clinic from "../SliderData/SliderItems";
import { useEffect, useState} from "react";
import styled from "../Carrusel/MainStyled.module.css"
const Carrusel=():JSX.Element=>{
    const [currentIndex,setCurrentIndex]=useState<number>(0);
    useEffect(()=>{
        setTimeout(()=>{
            SlideR();
        }, 3000)
    })
    const SlideR=()=>{
        if(currentIndex>=Clinic.length-1){
            setCurrentIndex(0)
        }else{
            setCurrentIndex((currentIndex)=>currentIndex+1);
        }
    }
    const SlideL=()=>{
        if(currentIndex===0){
            setCurrentIndex(Clinic.length-1)
        }else{
            setCurrentIndex((currentIndex)=>currentIndex-1)
        }
    }
    console.log(currentIndex)
    return (
        <CarruselMainContainer>
            <CarruselSliderContainer>
                {Clinic.map((item,index)=>{
                    return(
                        <div key={index} className={index===currentIndex ? styled.carusel_cardActive : styled.carusel_card}>
                            <CarruselImg src={item.img} alt=""/>
                            <CarruselInfoContainer>
                                <InfoContainer>
                                    <h2 style={{textAlign:'center'}}>{item.title}</h2>
                                    <p style={{textAlign:'center'}}>{item.description}</p>
                                </InfoContainer>
                            </CarruselInfoContainer>
                        </div>
                    )
                })}
                <ArrowBtn onClick={SlideL} className={styled.carusel_arrowL}>&lsaquo;</ArrowBtn>
                <ArrowBtn onClick={SlideR} className={styled.carusel_arrowR}>&rsaquo;</ArrowBtn>
            </CarruselSliderContainer>
        </CarruselMainContainer>
    )
}
export default Carrusel;