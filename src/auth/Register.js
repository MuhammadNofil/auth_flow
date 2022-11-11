import React,{useState} from 'react'
import { signupuser } from '../redux/slice/authSlice'
import {useDispatch} from 'react-redux'

const Register = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const dispatch=useDispatch()
    const RegisterHandler=()=>{
        console.table(name,email,password)
        dispatch(signupuser({name,email,password}))
    }

    return (
    <div>
    <div className='d-flex flex-column align-items-center'>
        <h3>Register</h3>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className='mt-3' onClick={RegisterHandler}>Register</button>
    </div>
    </div>
    )
}

export default Register