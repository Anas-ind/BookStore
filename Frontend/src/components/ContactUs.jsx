import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <div className=''>
          <div  className='flex h-screen items-center justify-center border-[2px] shadow-md   '>
            <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} 
                method="dialog">
                <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
                <h3 className="font-bold text-3xl">Contact Us</h3>
                <div className='mt-4 space-y-2'>
                    <span>Name</span>
                    <br />
                    <input className='w-[28rem] px-3 py-1 rounded-md outline-none border dark:bg-slate-900 dark:text-white' 
                    type="text" 
                    placeholder='Enter your Full Name'
                    {...register("name", { required: true })}
                    />
                    <br />
                    {errors.name && <span className='text-sm text-red-400'>This field is required</span>}
                  
                    <br />
                    </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input className='w-[28rem] px-3 py-1 rounded-md outline-none border dark:bg-slate-900 dark:text-white' 
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
                    <span>Message</span>
                    <br />
                    <textarea className='border outline-none w-[28rem] dark:bg-slate-900 dark:text-white' 
                    name="message" id="message" placeholder='Enter your message'
                    {...register("message", { required: true })}></textarea>
                     <br />
                    {errors.message && <span className='text-sm text-red-400'>This field is required</span>}
                  

                </div>
                <div className='flex justify-between mt-4 '>
                    <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200'>Submit</button>
                  
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs