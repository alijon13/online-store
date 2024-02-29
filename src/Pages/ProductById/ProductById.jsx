import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getDataById } from '../../reducers/api'
import { useLocation, useNavigate } from 'react-router-dom'

const productById = ({productId}) => {

  const dispatch = useDispatch()

  const product = useSelector((store) => store.api.data1);

  const navigate = useNavigate()

  const {pathname} = useLocation()

  console.log(pathname.slice(-1));

  useEffect(() => {
    dispatch(getDataById(pathname.slice(-1)))
  }, [dispatch])

  return (
    <div>
      {/* <p>Name: {product?.name}</p>
      <p>Price: {product?.price}</p>
      <p>Description: {product?.description}</p>
      <img width={300} src={product?.img} alt="" /> */}
      <main className=" flex dark:bg-[#262626] items-center pb-[4%] pt-[5%] px-[8%]">
            <section className="w-[50%] flex justify-center">
              {
                // data.images.map((el) => {
                //   // console.log(el);
                //   return (
                <img
                  className="h-[450px] bg-[#262626]"
                  src={product?.img}
                  // src={`${import.meta.env.VITE_APP_FILES_URL}${el}`}
                  alt=""
                />

                //   )
                // })
              }
            </section>
            <section className="w-[50%] flex flex-col ">
              <div className="flex w-[80%]   flex-col gap-0.2">
                <div className=" flex flex-col gap-0.2">
                  <h1 className="text-[25px]">{product.name}</h1>
                </div>
                <h1 className=" font-bold text-[30px]">{product?.price}</h1>
              </div>
              <div className=" flex flex-col w-[80%] my-[2%] gap-2">
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Бренд</span>
                  {product?.brand}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Объём встроенной памяти
                  </span>
                  256 ГБ
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Модель</span>
                  {product?.name}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Объём оперативной памяти
                  </span>
                  8 ГБ
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Размер</span>
                  {product?.size}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Mасса</span>
                  {product?.weight}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Цвет</span>
                  {product?.color}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Год выпуска
                  </span>
                  2023
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Процессор
                  </span>
                  Exynos 1380
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Разрешение основной камеры
                  </span>
                  50 МП
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D]">
                    Разрешение фронтальной камеры
                  </span>
                  32 МП
                </h1>
              </div>
            </section>
          </main>
    </div>
  )
}

export default productById