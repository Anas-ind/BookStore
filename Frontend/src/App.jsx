import React from 'react'
import Home from '../src/home/Home'
import Courses from '../src/courses/Courses'
import Contact from '../src/contactus/Contact'
import { Toaster } from 'react-hot-toast'

import { Navigate, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'
import AuthProvider, { useAuth } from './context/AuthProvider'

const App = () => {

  const [authUser , setauthUser] = useAuth();
  console.log(authUser)

  return (
    <AuthProvider>
    <div className=':bg-slate-900 dark:text-whitedark' >
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path='/' element= {<Home/>}/>
          <Route path='/course' element= {authUser?<Courses/>:<Navigate to= '/signup'/>}/>
          <Route path='/signup' element= {<Signup/>}/>
          <Route path='/contactus' element = {<Contact/>} >
        </Route>
      </Routes>
      <Toaster />
    </div>
    </AuthProvider>
  )
}

export default App