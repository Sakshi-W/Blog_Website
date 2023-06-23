import React from 'react'
import './ContainerBody.css'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const ContainerBody = () => {
  return (
    <div className='ContainerBody'>
        <div className="input-container">
            <input type="email" className="field-input" required />
            <label>Email</label>
            <EmailIcon className='icons-s'/>
        </div>
        <div>
            <input type="email" className="field-input" required /> 
            <label>Password</label>
            <LockIcon className='icons-s'/>
        </div>
        <input type="button" id="log_but" value="Login"/>
    </div>
  )
}
export default ContainerBody
