import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:"",
}

export const signupuser=createAsyncThunk('signup',async(body)=>{
    const res=await fetch('dddddddddddddddddd',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(body)
    })
    
    return await res.json();
})
export const signinuser=createAsyncThunk('signin',async(body)=>{
    const res=await fetch('http://104.215.249.5.5000/api/login',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(body)
        
    })
    console.log(res)
    return await res.json();
})

const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addtoken:(state,action)=>{
            state.token=localStorage.getItem("token")
        },
        adduser:(state,action)=>{
            state.user=localStorage.getItem("user")
        },
        logout:(state,action)=>{
            state.token=null;
            localStorage.clear()
        }
    },
    extraReducers:{
        [signinuser.pending]:(state,action)=>{
            state.loading=true
        },
        [signinuser.fulfilled]:(state,{payload:{error,msg,token,user}})=>{
            state.loading=false
            if(error){
                state.error=error
            }
            else{
                state.msg=msg;
                state.user=user
                state.token=token;
                localStorage.setItem("msg",msg)
                localStorage.setItem("user",JSON.stringify(user))
                localStorage.setItem("token",token)
            }
        },
        [signinuser.rejected]:(state,action)=>{
            state.loading=true
        },
        [signupuser.pending]:(state,action)=>{
            state.loading=true
        },
        [signupuser.fulfilled]:(state,{payload:{error,msg}})=>{
            state.loading=false
            if(error){
                state.err=error
            }
            else{
                state.msg=msg
            }
        },
        [signupuser.rejected]:(state,action)=>{
            state.loading=true
        },
    }
})

export const {addtoken,adduser,logout}=authSlice.actions;
export default authSlice.reducer