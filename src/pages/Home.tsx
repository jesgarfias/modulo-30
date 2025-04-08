import Header from "../components/Header";
import Results from "../components/Results";
import AboutUs from "../components/AboutUs";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import Counters from "../components/Counters";
import TabsPage from "../components/TabsPage";
import Contac from "../components/Contact";

const Home =()=>{
    return(
        <>
            <Header/>
            <AboutUs/>
            <Carrusel/>
            <Results/>
            <Counters/>
            <TabsPage/>
            <Contac/>
            <Footer/>
        </>
    )
}
export default Home;