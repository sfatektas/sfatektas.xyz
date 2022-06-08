import Home from "./Home";
import Navbar from "./Navbar"
const Content = () => 
{
    return (
        <div className="w-9/12 ml-auto sm:w-full sm:order-1 sm:h-screen">
            <Navbar/>
            <Home/>
            {/* <Skills/> */}
        </div>
    )
}
export default Content;