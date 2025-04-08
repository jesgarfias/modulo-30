import { useEffect, useRef, useState } from "react";
import { CounterCardContainer, CountersMainContainer } from "./styled"
import Rooms from "../Icons/Rooms";
import Doctors from "../Icons/Doctors";
import Years from "../Icons/Years";

const Counters=()=>{
    const [counter1,setCounte1]=useState<number>(0);
    const [counter2,setCounter2]=useState<number>(0);
    const [counter3,setCounter3]=useState<number>(0);

    const target1:number=65;
    const target2:number=80;
    const target3:number=30;

    const divRef=useRef<HTMLDivElement>(null)
    const hasStarted=useRef <boolean>(false)
    useEffect(()=>{
        const observer= new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !hasStarted.current) {
                hasStarted.current = true;
    
                const interval1 = setInterval(() => {
                    setCounte1((counter1)=>{
                        if(counter1<target1) return counter1 + 1;
                        clearInterval(interval1);
                        return counter1;
                    })
              }, 10);

              const interval2 = setInterval(() => {
                setCounter2((prev) => {
                  if (prev < target2) return prev + 1;
                  clearInterval(interval2);
                  return prev;
                });
              }, 10);

              const interval3= setInterval(()=>{
                setCounter3((counter3)=>{
                    if(counter3<target3) return counter3+1;
                    clearInterval(interval3);
                    return (counter3)
                })
              },10)
            }
        }, {threshold:0.5})

        if (divRef.current) {
            observer.observe(divRef.current);
          }
      
          return () => {
            if (divRef.current) observer.unobserve(divRef.current);
          };
    },[])
    

    return(
        <CountersMainContainer ref={divRef}>
            <CounterCardContainer>
                <Rooms/>
                <h2>Habitaciones</h2>
                <span style={{fontSize:'2em'}}>{counter1}</span>
            </CounterCardContainer>
            <CounterCardContainer>
                <Doctors/>
                <h2 style={{width:'85%'}}>Medicos especialistas</h2>
                <span style={{fontSize:'2em'}}>{counter2}</span>
            </CounterCardContainer>
            <CounterCardContainer>
                <Years/>
                <h2 style={{width:'85%'}}>Años de experiencia</h2>
                <span style={{fontSize:'2em'}}>{counter3} </span>
            </CounterCardContainer>
        </CountersMainContainer>
    )
}
export default Counters;