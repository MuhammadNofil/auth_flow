import React,{useState} from 'react'
import { signinuser } from '../redux/slice/authSlice'
import {useDispatch} from 'react-redux'
const Login = () => {
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const dispatch=useDispatch()
    const LoginHandler=()=>{
        console.log(name,password)
        dispatch(signinuser({name,password}))
    }
    return (
    <div>
    <div className='d-flex flex-column align-items-center'>
        <h3>Login</h3>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
        <label htmlFor="">Email</label>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className='mt-3' onClick={LoginHandler}>Login </button>
    </div>
    </div>
    )
    }
export default Login