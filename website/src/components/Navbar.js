
import logo from "../assets/img/logo2.png"

const Navbar = () => 
{
return(
    <div className=" w-full bg-black  h-auto s">
        <div className="flex justify-center">
        <img className=" hidden sm:max-h-20 sm:block" src={logo}></img>
        </div>
    </div>
)
}

export default Navbar;