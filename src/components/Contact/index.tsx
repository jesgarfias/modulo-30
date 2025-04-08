import React, { useState } from "react"
import { JSX } from "react"
import {BtnForm, ComentsBox, FormMainContainer, InputBox } from "./styled"
interface DataForm{
    username:string,
    email:string,
    phone: string,
    comments:string
}

const Contac =():JSX.Element=>{
    const [initialValue, setInitialValue]=useState<DataForm>({username:'', email:'', phone:'',comments:''})
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value}=e.target;
        setInitialValue ((prevState)=>{
                return{
                    ...prevState,
                    [name]:value
                }
        })
    }
    console.log(initialValue);

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
        alert(` hola ${initialValue.username} su informacion se a enviado correctamente`)
    }

    return(
        <section>
            <h2 style={{textAlign:'center'}}>CONTACTO</h2>
            <FormMainContainer onSubmit={handleSubmit}>
                <label style={{fontSize:'1.1rem'}} htmlFor="username"> Nombre</label>
                <InputBox type="text" id="username" name="username" value={initialValue.username} onChange={handleChange}/>

                <label style={{fontSize:'1.1rem'}} htmlFor="email"> Email</label>
                <InputBox type="email" id="email" name="email" value={initialValue.email} onChange={handleChange}/>

                <label style={{fontSize:'1.1rem'}} htmlFor="phone"> Telefono </label>
                <InputBox type="text" id="phone" name="phone" value={initialValue.phone} onChange={handleChange}/>

                <label style={{fontSize:'1.1rem'}} htmlFor="comments">Comentarios</label>
                <ComentsBox name="comments" id="comments" rows={4} cols={30} value={initialValue.comments} onChange={handleChange}></ComentsBox>
            
                <BtnForm style={{fontSize:'1.1rem'}} type="submit">Enviar</BtnForm>
            </FormMainContainer>
        </section>
    )
}

export default Contac