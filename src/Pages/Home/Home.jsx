import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import './Home.css';
import { Pagination } from 'swiper/modules';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';

import { getData, getDataById, postBuket } from '../../reducers/api';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedCategory } from '../../reducers/api';

const Home = () => {



  const data = useSelector((store) => store.api.data)
  const productById = useSelector((store) => store.api.productById)
  const selectedCategory = useSelector((state) => state.api.selectedCategory);


  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategory(category));
  };
  

const filteredData = selectedCategory ? data.filter((item) => item.category === selectedCategory) : data; 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <main className=' w-[87%] m-auto my-[50px] flex flex-col gap-20'>

      {/* section 1 */}
      <section className='flex justify-between'>

        <aside className='w-[20%]  text-[20px] border-r flex flex-col gap-2'>
        <p className='cursor-pointer' onClick={() => handleCategorySelect('')}>All Devices</p>
        <p className='cursor-pointer' onClick={() => handleCategorySelect('iphones')}>Apple Devices</p>
          <p className='cursor-pointer'  onClick={() => handleCategorySelect('samsungs')}>Samsung Devices</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </aside>

        <aside className='w-[75%] object-cover h-[400px]'>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><img src="src/assets/iPhone-15-Pro-Review-Top-Gear (1).webp" alt="" /></SwiperSlide>
            <SwiperSlide><img className='' src="src/assets/hero_endframe__e0ajd2ayxqc2_large.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </aside>

      </section>

      {/* section 2 */}
      <section className='flex flex-col gap-2'>
        <p className='border-l-[10px] border-l-[#DB4444] text-[#DB4444] text-[20px] pl-[10px]'>Today’s</p>

        <div className=' grid grid-cols-4 gap-[70px]'>
          {
            filteredData?.map((e) => {
              console.log(e);
              return (
                <Card sx={{ maxWidth: 345 }}>
                  <Link to={`/product/${e.id}`}>
                    
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: "260px", objectFit: "cover" }}
                      component="img"
                      image={e.img}
                      className='shopCart bg-[#F5F5F5] object-cover'
                      alt="green iguana"
                    />
                    <CardContent>
                      <p>{e.name}</p>
                      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <p className=' text-[#DB4444]'>{e.price}</p>
                        <del className="text-[gray]">${"10"}</del>
                      </Box>
                      <Box>
                        <Box sx={{ display: "flex" }}>
                          <Box className='flex gap-1 items-center'>
                            <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
                            <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
                            <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
                            <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
                            <img src="../src/assets/full.png" className='h-[16px] w-[16px]' alt="star" />
                          </Box>
                          <p>({"20"})</p>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  </Link>
                  <hr />
                  <div className=" py-[20px] flex justify-center">
                  <button className='bg-[orange] px-[30px] py-[10px] rounded-lg text-white' onClick={()=>dispatch(postBuket({name:e.name,img:e.img,price:e.price,description:e.description}))}>Cart</button>
                  </div>
                </Card>
              )
            })
          }
        </div>
        <button className=' p-[10px_50px] bg-[#DB4444] text-white text-[20px] rounded-md m-[100px_auto_10px_auto] '>View All Products</button>
      </section>

      {/* section 3 */}
      <section className='flex flex-col gap-2 my-[100px]'>
        <p className='border-l-[10px] border-l-[#DB4444] text-[#DB4444] text-[20px] pl-[10px]'>Categories</p>
        <p className="text-[35px] py-[10px] font-bold">Browse By Category</p>
        <div className=' flex justify-between items-center'>
          <div className='w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]'>
            <PhoneAndroidOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className='text-[20px]'>Phones</p>
          </div>
          <div className='w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]'>
            <DesktopWindowsOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className='text-[20px]'>Computers</p>
          </div>
          <div className='w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]'>
            <WatchOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className='text-[20px]'>SmartWatches</p>
          </div>
          <div className='w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]'>
            <CameraAltOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className='text-[20px]'>Camera</p>
          </div>
          <div className='w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]'>
            <HeadsetOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className='text-[20px]'>HeadPhones</p>
          </div>
          <div className='w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]'>
            <VideogameAssetOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className='text-[20px]'>Gaming</p>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Home