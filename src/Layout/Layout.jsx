import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, Outlet } from 'react-router-dom';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import facebook from '../assets/facebook.png';
import logo from '../assets/in.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Layout = () => {
  return (
    <div>
        <div className='p-[20px_100px]  flex justify-between items-center border-b border-b-[#ccc]'>
            <p className="font-[600] text-[25px]">Exclusicve</p>
            <ul className='flex gap-7 items-center text-[20px]'>
                <Link to={'/'}><li className=' cursor-pointer'>Home</li></Link>
                <li className=' cursor-pointer'>Contact</li>
                <li className=' cursor-pointer'>About</li>
                <li className=' cursor-pointer'>Sign Up</li>
            </ul>
            <div className='flex items-center  justify-between w-[30%] '>
                <div className='flex bg-[#f5f5f5] items-center p-[5px] w-[80%] gap-2'>
                    <input type="text" className=' border-none bg-transparent outline-none  w-[85%]  text-[18px] rounded-[3px] p-[0_5px]' placeholder='What are you looking for?' />
                    <SearchIcon/>
                </div>
                <FavoriteBorderIcon/>
                <Link to="Buket">
                <ShoppingCartOutlinedIcon/>
                </Link>
            </div>
        </div>
        <div className=' min-h-[359.2px]'>      
            <Outlet/>
        </div>

        <div className=' bg-black text-white text-[16px] p-[50px_100px] flex justify-between items-start'>
            <ul className=' flex flex-col gap-3 w-[20%]'>
                <li className='font-[600] text-[20px]'>Exclusive</li>
                <li>Subscribe</li>
                <li>Get 10% off your first order</li>
                <li className='flex items-center border border-gray-400'>
                    <input type="text" className=' bg-transparent  p-[5px] outline-none text-[20px]' placeholder='Enter your email' />
                    <SendOutlinedIcon/>
                </li>
            </ul>

            <ul className=' flex flex-col gap-3 w-[14%]'>
                <li className='font-[600] text-[20px]'>Support</li>
                <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.comr</li>
                <li>+88015-88888-9999</li>
            </ul>

            <ul className=' flex flex-col gap-3 w-[14%]'>
                <li className='font-[600] text-[20px]'>Account</li>
                <li>My Account</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>

            <ul className=' flex flex-col gap-3 w-[14%]'>
                <li className='font-[600] text-[20px]'>Quick Link</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>

            <ul className=' flex flex-col gap-3 w-[14%]'>
                <li className='font-[600] text-[20px]'>Social</li>
                <div className='flex items-center gap-3'>
                    <img src={facebook} className='w-[24px] h-[24px]' alt="picture" />
                    <img src={twitter} className='w-[24px] h-[24px]' alt="picture" />
                    <img src={instagram} className='w-[24px] h-[24px]' alt="picture" />
                    <img src={logo} className='w-[24px] h-[24px]' alt="picture" />
                </div>
                
            </ul>
        </div>
        <div className='flex text-[16px] text-gray-400 py-[20px] border-t bg-black  justify-center'>
            <p>Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
  )
}

export default Layout