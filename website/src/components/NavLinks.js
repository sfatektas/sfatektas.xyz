import {} from "react-dom"

const NavLinks = () => 
{
    return(
     <div className="inline-block">
         <ul>
         {/* <a href="#"><li className="inline-block p-5 px-9 text-white  hover:bg-gray-900  text-xl transition-all ">Home</li></a> */}
         <a href="#"><li className="inline-block p-5 px-9 text-white  hover:bg-gray-900  text-xl transition-all">About</li></a>
         <a href="#skill"><li className="inline-block p-5 px-9 text-white  hover:bg-gray-900  text-xl transition-all ">Skills</li></a>
         </ul>
     </div>
    )

}
export default NavLinks ; 
