import NavLinks from "./NavLinks"
import {useState} from "react";

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
    <div className=" w-full bg-lime-900  h-auto s">
        <div className="flex justify-center">
        <NavLinks/>
        <div className=" pr-5 text-black text-lg font-bold inline-block">{time}</div>
        </div>
    </div>
)
}

export default Navbar;