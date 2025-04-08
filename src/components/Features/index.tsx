import { useEffect, useRef, useState } from "react";
import Rooms from "../Icons/Rooms";

const Features=()=>{
    const myRef=useRef<HTMLDivElement | null>(null);
    const [isVisible,setIsVisible]=useState<boolean>();

    useEffect (()=>{
        if (myRef.current!==null){
            const observer= new IntersectionObserver((entries)=>{
                const entry= entries[0];
                setIsVisible(entry.isIntersecting);
                console.log(entry);
                console.log(entry.isIntersecting)
            });
            observer.observe(myRef.current);
            console.log('my ref', myRef.current);
        }
    },[]);


    const initiaState:number=0;
    const [counter,setCounter]=useState<number>(initiaState);
    const rooms:number=65

    const HandleClick=()=>{
        const Interval=setInterval(()=>{
            if(counter<10){
                setCounter((counter)=>counter+1)
           }else{
            setCounter(initiaState);
           }
        }, 10);
        return()=>clearInterval(Interval);
    }


return (
        <section>
            <div  ref={myRef}>
                <Rooms/>
                {counter}
                <h2>Habitaciones</h2>
            </div>
            <button onClick={HandleClick}>Iniciar</button>
        </section>
    )
}
export default Features;