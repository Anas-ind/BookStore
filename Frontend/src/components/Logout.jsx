import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser , setauthUser] = useAuth()
    const handlelogout= () =>{
        try {
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success('Logout successfully') 
            // document.getElementById('my_modal_3').close()
            
            setTimeout(()=>{
                window.location.reload();
            },3000)

        } catch (error) {
            setTimeout(()=>{
                toast.error('Error '+ error.message)

            },2000)
        }
    } 
  return (
    <div>
        <button 
        onClick={handlelogout}
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer '>
        Logout</button>
    </div>
  )
}

export default Logout