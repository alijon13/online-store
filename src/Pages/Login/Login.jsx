import React from 'react'
import { useFormik } from 'formik'

const LogIn = () => {

  const formik = useFormik(
    {
      initialValues:
      {
        userName:"",
        password:""
      },
      onSubmit: async () =>
      {
        console.log(formik.values);
      }
    }
  )

  return (
    <div className='min-h-[100svh] flex justify-center items-center'>
      <div className='w-[25%]   flex flex-col  gap-5'>
        <p className="text-[30px] font-[600]">Log in to Exclusive</p>
        <p className="text-[20px] mt-[-20px]">Enter your details below</p>

        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5 w-[100%]'>
          <input name='userName' onChange={formik.handleChange} value={formik.values.userName} type="text" className='text-[20px] w-[100%] border outline-none border-[gray] p-[5px_10px] rounded-md h-[6svh]' placeholder='UserName' />
          <input name='password' onChange={formik.handleChange} value={formik.values.password} type="password" className='text-[20px] w-[100%] border outline-none border-[gray] p-[5px_10px] rounded-md h-[6svh]' placeholder='password' />
        </form>
        <p className="text-[20px] text-[#DB4444] text-center">Forget Password?</p>
        <button className=' rounded-md text-white text-[20px] py-[10px] bg-[#DB4444]'>Log In</button>
      </div>
    </div>
  )
}

export default LogIn