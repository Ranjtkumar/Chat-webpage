import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {
 const [username,setUserName] =  useState('')

  const [email,setEmail] = useState('')

  const [password,setPassWord] = useState("")

  const [isSignup,setIsSignup] = useState(false)

  const [userList,setUserList] = useState([])

  const [errMsg,setErrMsg] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3002/user/get").then(
      res=>setUserList(res.data)
    ).catch(
      err=>console.log(err)
    )
  },[])

  const handleLogin = (e)=>{
    e.preventDefault()

    const user = userList.find(x=>x?.email === email)

    if(user){
      if(user?.password === password){
        navigate("/")
      }else{
        setErrMsg("Incorrect password")
      }
    }else{
      setErrMsg("User Not found")
    }
    
  }

  const handleSignUp = (e)=>{
    e.preventDefault()
    
    axios.post("http://localhost:3002/user/signup",{username,email,password}).then(
      res=>(setUserList(res.data),alert("user added successfully"),setIsSignup(false))
    ).catch(
      err=>console.log(err)
    )
  }

  return (
    <div className='flex justify-center items-center bg-cover pt-[32px] overflow-y-hidden' style={{backgroundImage:`url('/assets/chatbg.jpg')`}}>
     
        <div className='grid grid-cols-12 w-1/2 border-8 border-orange-500 rounded'>
          <div className='flex flex-col items-center col-span-5 bg-blue-200'>
            <div className='flex flex-col items-center'>
              <img src="/assets/chatIcon.png" className='mt-5 w-20'/>
              <div className='mb-5 text-lg font-bold pt-3'>Welcome to Chatamps</div>
            </div>
            
            <img src="/assets/quotes.jpg" className='w-full'/>
          </div>

         <div className='col-span-7 grid justify-center bg-slate-100 items-center'>
             { !isSignup ? <form onSubmit={handleLogin}>
                <label className='font-semibold'>Email Id</label><br/>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
                  className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 text-base'/><br/>
                <label className='font-semibold pt-4'>Password</label><br/>
                <input type='password' value={password}  onChange={(e)=>{setPassWord(e.target.value)}}

                
                className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 base'/><br/>

                <div className='text-red-500 pt-2 text-lg font-semibold'>{errMsg}</div>

                <button type='sumbit' className='bg-green-600 px-4 py-2 rounded-lg mt-4 font-medium 
                text-white text-lg'>Login</button>

                  <div className='pt-5 cursor-pointer' onClick={()=>{setIsSignup(true);setEmail("");setPassWord("")}}>
                    {`Didn't have account`}
                <span className='text-blue-800 font-bold'> Sign Up</span></div>
              </form> : 

              <form onSubmit={handleSignUp}>
                <label className='font-semibold'>User Name</label><br/>
                <input value={username}  onChange={(e)=>{setUserName(e.target.value)}}
                  className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 text-base'/><br/>
                <label className='font-semibold pt-4'>Email Id</label><br/>
                <input value={email}  onChange={(e)=>{setEmail(e.target.value)}}
                  className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 text-base'/><br/>
                <label className='font-semibold pt-4'>Password</label><br/>
                <input value={password}  onChange={(e)=>{setPassWord(e.target.value)}}
                  type='password' className='mt-2 border-2 border-black rounded-lg px-1 py-0.5 base'/><br/>
                <button type='sumbit' className='bg-green-600 px-4 py-2 rounded-lg mt-4 font-medium 
                text-white text-lg'>Sign up</button>

                <div className='pt-5 cursor-pointer' onClick={()=>{setIsSignup(false);setEmail("");setPassWord("")}}>{`Already have account`}
                  <span className='text-blue-800 font-bold'> Login In</span></div>
              </form> }

             
          </div>

        </div>

        
      

    </div>
  )
}
