import React, { useEffect, useMemo, useRef, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MoreVert } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Profile from './Profile';
import axios from 'axios'
import Users from './Users';
import { Message } from '../models/message.ts';


export default function Chat() {
    const [showMenu,setShowMenu] = useState(false)
    const inputFile = useRef(null)

    const [showProfile,setShowProfile] = useState(false)

   

    const [showUsers,setShowUsers] = useState(false)
    //66496328c9546c1d8e1812ed
    //664966ecc39b785527cbfeca
    const [currentUser,setCutrrentUser] = useState("664966ecc39b785527cbfeca")
    const [selectedChat,setSelectedChat] = useState("")
    const [userList,setUserList] = useState([])
    const [chatList,setChatList] = useState([])

    useEffect(()=>{
        document.addEventListener("click",handleClickOutSide,true)

        getChats()
        getUsers()

        return()=>{
            document.removeEventListener("click",handleClickOutSide,true)
        }
    },[])

    function getUsers(){
        axios.get("http://localhost:3002/user/get").then(
            res=>setUserList(res.data)
        ).catch(
            err=>console.log(err)
        )
    }

    function getChats(){
        axios.get("http://localhost:3002/chat/get").then(
            res=>setChatList(res.data)
        ).catch(
            err=>console.log(err)
        )
    }

    
    const menuRef = useRef(null)

    const handleClickOutSide = (e)=>{
        if(!menuRef?.current?.contains(e.target)){
            setShowMenu(false)
        }
       
    }


    function getUserName (users){
        let user = {}
        userList?.map((each)=>{
            if(users?.includes(each?._id) && each?._id!=currentUser){
                user = each
            }
        })
       
        return user?.username
    }

    const messages = useMemo(()=>{
        return chatList.find(x => x._id===selectedChat)?.messages
     },[selectedChat,chatList])

     const [msgText,setMsgText] = useState('')

     

    function sendMessage(){
        let newMsg = new Message()
        newMsg.text = msgText
        newMsg.isReadonly = false
        newMsg.sendBy = currentUser
        newMsg.type = "private"
        

        axios.post("http://localhost:3002/chat/message",{_id:selectedChat,message:newMsg}).then(
            res=>{getChats();setMsgText("")}
        ).catch(
            err=>console.log(err)
        )
    }

    
    
  return (
    <div className='w-full h-[89vh] overflow-hidden'>
        <div className={`bg-white h-full grid grid-cols-12 border-7 border-gray-400 rounded-lg`}>
            <div className={`col-span-3 border-r-2 border-gray-600 ${(showProfile || showUsers)  ? "bg-white": "bg-slate-200"}`}>
                {
                   (!showProfile && !showUsers) && <>
                    
                        <div className="flex justify-between  px-2 pt-2 relative">
                            <div className='text-2xl font-bold '>Chats</div>
                            <div className="bg-green-500 cursor-pointer w-3 flex items-center justify-center text-white rounded-t-full rounded-b-full"
                                onClick={()=>{setShowMenu(true)}}>
                                <MoreVert/>
                            </div>

                        {showMenu && <div ref={menuRef} className='shadow-sm border-1 absolute border-gray-400 right-2 top-10 bg-white rounded-2'>
                                <div className='p-2 border-b cursor-pointer'>Settings</div>
                                <div className='p-2 border-b cursor-pointer' onClick={()=>setShowUsers(true)}>New chat</div>
                            </div> }

                        </div>
                    
                        <div className='border-1 border-gray-400 rounded-lg py-1 px-1.5 mt-3 mx-2 bg-white flex'>
                            <div className="text-base border-r border-slate-400 text-gray-600 pr-1"><SearchIcon/></div>
                            <input placeholder='Search for chat' style={{outline:"none"}} className='text-base grow pl-2'/>
                        </div>

                        <div className='my-2 overflow-scroll chats shadow-md mx-2 rounded-xl bg-white border-1 border-gray-500'>

                            {
                                chatList?.map((each)=>{
                                    return(
                                        <div className='flex gap-2 border-b border-slate-400 p-2'>
                                            <div onClick={()=>setShowProfile(true)} className='cursor-pointer'>
                                                {
                                                    (each?.image) ?  <img src={each?.image} className='h-12 w-12 rounded-full'/> : 
                                                    <img src="/assets/EmptyPic.jpg" className='h-12 w-12 rounded-full'/>

                                                 }
                                               
                                            </div>
                                            <div onClick={()=>setSelectedChat(each?._id)} className='flex flex-col justify-center gap-1 grow cursor-pointer'>
                                                <div className='text-base font-semibold'>
                                                    {getUserName(each?.users)}
                                                </div>
                                                <div className='text-sm font-normal'>Good Morning</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                           
                        </div>
                    </>

                    
                }

                {
                    showProfile && <Profile closeProfile={()=>setShowProfile(false)}/>
                }

                {
                    showUsers && 
                    <Users closeUsers={()=>setShowUsers(false)} chatList={chatList} 
                      currentUser={currentUser} />
                }
            </div>
            <div className='col-span-9 messages overflow-scroll mb-14 pt-8'>
               {
                    messages && messages?.map((each)=>{
                        
                           return each?.sendBy === currentUser ?
                            ( <div className='flex justify-end'>
                                <div className='bg-[#036242] w-fit text-white text-base p-3 relative rounded-l-lg rounded-br-lg mr-4 ml-28 mb-4 send-message'>
                            
                                {each?.text}
                                    
                            </div>
                           </div>) : (
                               <div className='flex justify-start'>
                                <div className='bg-gray-700 w-fit leading-6 w-fit text-white text-base p-3 relative rounded-r-lg rounded-bl-lg ml-4 mr-28 mb-4 receive-message'>
                                    {each?.text}
                                </div>
                               </div>
                           )
                        
                        
                        
                    })
               }
               
                {
                   (messages) &&  <div className='flex fixed shadow-sm border-2 bottom-0 gap-2 justify-between w-[-webkit-fill-available] bg-slate-300  py-2 px-3'>
                        <div onClick={()=>{inputFile.current.click()}}
                        className='h-10 w-10 bg-green-800 rounded-full flex justify-center text-white items-center'>
                            <input ref={inputFile} type='file' style={{display:"none"}}/>
                            <FileUploadOutlinedIcon/>
                        </div>
                        <div className='grow'>
                            <input value={msgText} onChange={(e)=>{setMsgText(e.target.value)}}
                             className='w-full h-full border-1 border-gray-500  rounded-full px-3 outline-0 text-base text-wrap' placeholder="Enter your message"/>
                        </div>
                        <div onClick={sendMessage} className='h-10 w-10 bg-[#002387] rounded-full flex justify-center text-white items-center'><ArrowForwardIcon/></div>
                    </div>
                }
              
            </div>
        </div>
    </div>
  )
}
