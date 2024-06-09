import React from 'react'
import { Close, Message, Person,Group } from '@mui/icons-material'

export default function Profile(props) {
  return (
    <div>
        <div className='flex justify-between p-2 items-center bg-gray-200'>
            <div className='text-2xl font-bold'>Profile</div>
            <div onClick={props?.closeProfile} className='bg-[#FF0000] h-10 w-10 flex justify-center items-center rounded-full text-white font-bold'>
                <Close/>
            </div>

        </div>

        <div className='flex flex-col items-center gap-2 mx-3 my-2 border-b border-gray-400 pb-3'>
            <div className='border-8 border-gray-300 rounded-full'>
                <img src="/assets/EmptyPic.jpg" className='h-28 w-28 rounded-full m-[3px]'/>
            </div>
            <div className='text-xl font-bold'>Ranjitkumar</div>
            <div className='text-gray-700 text-md text-center'>Away | Male | Born 23.11.2000</div>
        </div> 

        <div className='bg-green-700 flex m-3 rounded-4 p-3 items-center justify-between'>
            <div className='flex flex-col items-center text-white'>
                <Message fontSize='large'/>
                <div className='text-lg font-bold '>123</div>
            </div>
            <div className='flex flex-col items-center text-white'>
                <Person fontSize='large'/>
                <div className='text-lg font-bold '>20</div>
            </div>
            <div className='flex flex-col items-center text-white'>
                <Group fontSize='large'/>
                <div className='text-lg font-bold'>3</div>
            </div>
        </div>

        <div className='flex justify-center mt-2'>
            <div className='bg-blue-700 py-2 px-4 text-base font-semibold text-white rounded-5'>Send Message</div>
        </div>
         
    </div>
  )
}
