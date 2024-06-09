import axios from 'axios'
import React, { useEffect,useMemo,useState } from 'react'
import { Close } from '@mui/icons-material'
import { Chat } from '../models/message.ts';

import SearchIcon from '@mui/icons-material/Search';


export default function Users(props) {
    const [userList,setUserList] = useState([])
    const [filteredUsers,setFilteredUser] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3002/user/get").then(
            res=>{
                setUserList(res.data);
            }
        ).catch(
            err=>console.log(err)
        )
    },[])

    useEffect(()=>{
        filterUser()
    },[userList])

    function filterUser(){
        let users = []
        userList?.map((eachUser)=>{
            props?.chatList?.map((each)=>{
                if(!(each?.users?.includes(props?.currentUser) && each?.users?.includes(eachUser?._id))){
                    users.push(eachUser)
                }
            })
        })

       setFilteredUser(users)
   } 

   function createNewChat(userId){
        let body = new Chat()
        body.type = "private"
        body.createdBy = props?.currentUser
        body.message = []
        body.users = [props?.currentUser,userId]

        axios.post("http://localhost:3002/chat/post",body).then(
            res=>(
                console.log(res)
            )
        ).catch(
            err=>console.log(err)
        )
        
   }




  return (
    <div>
         <div className='flex justify-between p-2 items-center bg-gray-200'>
            <div className='text-2xl font-bold'>Select User</div>
            <div onClick={props?.closeUsers} className='bg-[#FF0000] h-10 w-10 flex justify-center items-center rounded-full text-white font-bold'>
                <Close/>
            </div>

        </div>

        <div className='border-1 border-gray-400 rounded-lg py-1 px-1.5 mt-3 mx-2 bg-white flex'>
            <div className="text-base border-r border-slate-400 text-gray-600 pr-1"><SearchIcon/></div>
            <input placeholder='Search for user' style={{outline:"none"}} className='text-base grow pl-2'/>
        </div>
        
        {
            filteredUsers?.map((each)=>{
                return (
                    <div onClick={()=>createNewChat(each?._id)} className='flex gap-2 border-b p-2'>
                        <div><img src="/assets/EmptyPic.jpg" className='h-12 w-12 rounded-full'/></div>
                        <div className='flex flex-col justify-center gap-1'>
                            <div className='text-base font-semibold'>{
                               each?.username
                            }</div>
                        </div>
                    </div>
                )
            })
        
        }
      
    
    </div>
  )
}
