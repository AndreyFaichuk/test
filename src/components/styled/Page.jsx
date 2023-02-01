import React from 'react'
import './styles/index.css'

const Page = ({ children }) => {

  return (
    <div className='main-wrapper'>
        {children}
    </div>
  )
}

export default Page