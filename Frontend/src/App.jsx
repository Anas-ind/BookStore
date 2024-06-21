import React from 'react'
import Home from '../src/home/Home'
import Courses from '../src/courses/Courses'
import Contact from '../src/contactus/Contact'

import { Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'


const App = () => {
  return (
    <div className=':bg-slate-900 dark:text-whitedark' >
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/course' element= {<Courses/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/contactus' element = {<Contact/>} ></Route>

      </Routes>
    </div>
  )
}

export default App