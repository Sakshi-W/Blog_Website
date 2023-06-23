import React from 'react'
import './ContainerFooter.css'

export const ContainerFooter = () => {
  return (
    <div className='ContainerFooter'>
        <label>
          <input type="checkbox"/>
          Remember Me
        </label>
        <a href="#" className="forget-password">Forget Password</a>
    </div>
  )
}

export default ContainerFooter
