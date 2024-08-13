import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/blog_card'

function App() {

  return (
    <>
      <div className='main_div d-flex justify-content-center align-items-center'>
        <Card/>
       </div>
    </>
  )
}

export default App
