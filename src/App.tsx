import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Navbar} from "./components/Navbar/Navbar"
import {AppRouter} from "./components/AppRouter/AppRouter";



function App() {
  return (
          <div className='wrapper'>
              <Header/>
              <div className='main'>
                  <AppRouter/>
              </div>
              <Navbar/>
          </div>
  )
}

export default App
