import { JSX } from "react";
import TabsInfo from "./TabsInfo";
import { useRef, useState } from "react";
import styled from "../TabsContent/TabStyled.module.css"
import { BtnContainer, BtnTitle, DescriptionContainer, ImageContainer, ImageItem, InfoMainContainer } from "./styled";

const TabComponents=({TabsInfo:[]}):JSX.Element=>{
    const BtnRef=useRef(null);
    const [tabSelect,setTabSelect]=useState<number>(0)

    return(
        <section>
            <div>
                <BtnContainer>
                    {TabsInfo.map((Tab,index)=>(
                        <BtnTitle  ref={index===0 ? BtnRef : null} key={index} onClick={()=>setTabSelect(index)} className={tabSelect===index ? styled.tab_title: ''}>{Tab.title}</BtnTitle>
                    ))}
                </BtnContainer>
                <div>
                    {TabsInfo.map((Tab,index)=>(
                        <div className={tabSelect===index ? '': styled.tab_hidden}>
                            <InfoMainContainer>
                                <DescriptionContainer>{Tab.description}</DescriptionContainer>
                                <ImageContainer>
                                    <ImageItem src={Tab.img} alt="" />
                                </ImageContainer>
                            </InfoMainContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TabComponents;