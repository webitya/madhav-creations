import { Carousel } from "../../components/Homepage/Carousel"
import { Expertise } from "../../components/Homepage/Expertise"
import { Heroes } from "../../components/Homepage/Heroes"
import { Horizontal } from "../../components/Homepage/Horizontal"
import { Products } from "../../components/Homepage/Products"
import { WBtn } from "../../components/Homepage/WBtn"
import LayoutEl from "../../Shared/LayoutEl"



const HomePage=()=>{
    const display=(
        <>
        <LayoutEl>
             <Carousel/>
             <Heroes/>
             <Expertise/>
             <Products/>
             <WBtn/>
             {/* <Horizontal/> */}
        </LayoutEl>
        
        </>
    )
    return display
}
export default HomePage