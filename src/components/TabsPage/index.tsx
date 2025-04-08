import TabComponents from "../TabsContent/TabsComponent"
import TabsInfo from "../TabsContent/TabsInfo";
import { JSX } from "react";

const TabsPage=():JSX.Element=>{
    return(
        <section>
            <h1 style={{textAlign:"center"}}>Servicios Adicionales</h1>
            {/*tab components*/}
            <TabComponents TabsInfo={TabsInfo}/>
        </section>
    )
}
export default TabsPage;