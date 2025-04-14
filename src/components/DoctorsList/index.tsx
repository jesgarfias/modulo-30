import { useState } from "react";
import { JSX } from "react";
import Doctors from "../DirectoryData";
import { BannerTitle, CardElement, ElementsListContainer, ImageBaner, InputSection, InputSectionContainer, ListContainer, ListImage, MainBaner} from "./styled";
import { ImageContainer } from "../Slider/styled";
import directorio from "../../assets/directorio.jpg"
const DoctorsList=():JSX.Element=>{
    const [query,setQuery]= useState<string>("")  

    return(
        <ListContainer>
            <MainBaner>
                    <ImageBaner src={directorio} alt="consultorio médico" />
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <BannerTitle>Directorio médico</BannerTitle>
                    </div>
            </MainBaner>
            <InputSectionContainer>
                <InputSection type="text" placeholder="Busca por especialidad" onChange={(e)=>setQuery(e.target.value)}/>
            </InputSectionContainer>
            <ElementsListContainer>
                {Doctors.filter((doctor)=>{
                    return query.toLocaleLowerCase()===""? doctor:doctor.specialty.toLocaleLowerCase().includes(query)
                }).map((doctor)=>((
                    <CardElement key={doctor.id}>
                        <div style={{textAlign:'center'}}>
                            <h2>{doctor.name}</h2>
                            <p>{doctor.specialty}</p>
                            <span>{doctor.phone}</span>
                        </div>
                        <ImageContainer>
                            <ListImage src={doctor.img} alt="perfil doctor" />
                        </ImageContainer>
                    </CardElement>
                    )
                ))}
            </ElementsListContainer>
        </ListContainer>
    )
}
export default DoctorsList;