import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBuket } from '../../reducers/api'

const Buket = () => {

  const buket = useSelector((store) => store.api.buket)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getBuket())
  },[])

  return (
    <div className="grid grid-cols-4 gap-y-1 p-[20px]">
        {
        buket?.map((elem)=>{
            return (
                <div>
                    <img width={300} src={elem.img} alt="" />
                    <h1>{elem.name}</h1>
                    <h1>{elem.price}</h1>
                    <h1>{elem.description}</h1>
                </div>
            )
        })
        }
    </div>
  )
}

export default Buket