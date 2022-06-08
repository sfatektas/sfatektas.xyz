
import {useState} from "react";
import logo from "../assets/img/logo2.png"

const Navbar = () => 
{
    const [time , setTime] = useState(null)
    const currentTime = () => 
    {
       setInterval(()=>{
        var Time,Hour,Minutes,Seconds ; 
        var date = new Date();
        Hour = date.getHours();
        Minutes = date.getMinutes();
        Seconds = date.getSeconds();
        Time = `${Hour.toString()}:${Minutes.toString()}:${Seconds.toString()}`;
        setTime(Time);
       },1000)
        
    }
    currentTime();
return(
    <div className=" w-full bg-black  h-auto s">
        <div className="flex justify-center">
        {/* <NavLinks/> */}
        <img className=" hidden sm:max-h-20 sm:block" src={logo}></img>
        {/* <div className="pr-5 text-black text-lg font-bold inline-block"></div> */}
        </div>
    </div>
)
}

export default Navbar;