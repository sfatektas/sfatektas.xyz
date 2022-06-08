import '../index.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Email, GitHub} from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import PhotoSide from './PhotoSide';
import arrow from '../assets/img/arrow.png'
import logo from "../assets/img/logo2.png"
const Aside = () => {
    return (
        <div className='w-3/12 inline-block bg-black fixed sm:relative sm:w-full sm:order-2'> {/*h-screen silindi. */}
            <div className='h-screen flex items-center justify-between flex-col'>
                <div className='logo'>
                    <img className=' max-h-20' src={logo}></img>
                </div>
                <div className='flex  flex-col justify-center  items-center'>
                <PhotoSide />
                <div className=' text-white  w-10/12 m-9 text-center'>
                    <div>
                <h2 className=' text-4xl mb-8 my-8'> Contact me </h2>
                <div className='icons mb-28 '>
                    <div className='icon inline-block m-2 hover:text-gray-400 transition-all'><a href='#'><InstagramIcon fontSize='large'/></a></div>
                    <div className='icon inline-block m-2 hover:text-gray-400 transition-all'><a href='#'><LinkedInIcon fontSize='large'/></a></div>
                    <div className='icon inline-block m-2 hover:text-gray-400 transition-all'><a href ='#'><GitHub fontSize='large'/></a></div>
                    <div className='icon inline-block m-2 hover:text-gray-400 transition-all'><a href ='#'><EmailIcon fontSize='large'/></a></div>
                </div>
                </div>
                </div>
                </div>
            </div>
            {/* <div className='arrow absolute left-0 top-0'>
                <img className='text-white' src={arrow}></img>
                </div> */}
        </div>
    )
}

export default Aside;