interface service {
    id:number,
    title:string,
    img:string,
    description:string
}
const Clinic: service[]=[
    {
        id:1,
        title:"Laboratorios",
        img:"https://www.afoe.org/wp-content/uploads/2023/10/tecnico-de-laboratorio-clinico.jpeg",
        description:"Cuida tu salud"
    },
    {
        id:2,
        title:"Cirugia",
        img:"https://hospitalvozandes.com/wp-content/uploads/2022/06/shutterstock_2016115475-1-scaled.jpg",
        description:"Contamos con los mejores equipos "
    },
    {
        id:3,
        title:"Imagenologia",
        img:"https://meisonmedical.com/wp-content/uploads/2023/03/nuevo_equipo_radiologia.jpg",
        description:"Tus imagenes digitales"
    }


]
export default Clinic;