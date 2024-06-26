import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const userInfo = {
            fullname : data.fullname,
            email : data.email,
            password : data.password
        }
       await axios.post('http://localhost:3002/user/signup' , userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Signup Sucessfully ')
                navigate(from ,  {replace: true})
            }
            localStorage.setItem('Users', JSON.stringify(res.data.user))
        })
        .catch((err)=>{
            if(err.response){
                console.log(err)
                toast.error('Error: ' + err.response.data.message)
            }
        })
      }
  return (
    <div>
          <div  className='flex h-screen items-center justify-center border-[2px] shadow-md   '>
            <div className="modal-box dark:bg-slate-900 dark:text-white border-white border">
                <form onSubmit={handleSubmit(onSubmit)} 
                method="dialog">
                <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
                <h3 className="font-bold text-lg">Signup</h3>
                <div className='mt-4 space-y-2'>
                    <span>Name</span>
                    <br />
                    <input className='w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                    type="text" 
                    placeholder='Enter your Full Name'
                    {...register("fullname", { required: true })}
                    />
                    <br />
                    {errors.fullname && <span className='text-sm text-red-400'>This field is required</span>}
                  
                    <br />
                    </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input className='w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                    type="email" 
                    placeholder='Enter your email' 
                    {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                  
                    <br />
                    </div>
                    {/* Password  */}
                    <div className='mt-4 space-y-2'>
                    <span>Password</span>
                    <br />
                    <input type="password" 
                    className='w-80 px-3 rounded-md outline-none dark:bg-slate-900 dark:text-white dar:outline'
                    placeholder='Enter your Password'
                    {...register("password", { required: true })}
                    />
                     <br />
                    {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                  

                </div>
                <div className='flex justify-around mt-4 '>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                    <p className='text-xl'>Have Account?  
                    <button  
                    onClick={()=>document.getElementById('my_modal_3').showModal()}  
                    className='underline text-blue-500 cursor-pointer'>
                     Login 
                    </button> {" "}
                    <Login />
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup