import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
const Content = () => 
{
    return (
        <div className="w-9/12 ml-auto">
            {/* <Navbar/> */}
            <Home/>
            <Skills/>
        </div>
    )
}
export default Content;