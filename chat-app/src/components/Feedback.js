import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Feedback() {
  return (
    <div className='pt-5 px-10 bg-slate-200'>

        <div className='font-bold text-3xl text-center'>Leaeve your Taughts about chatamps!!!</div>
        <div className='grid grid-cols-12'>

            <div className='col-span-6 m-5 p-4 bg-lime-300 rounded-lg border-2 border-orange-700'>
                <form>
                    <div className='text-lg text-black font-semibold pb-2 pl-2'>Name</div>
                    <input type="text" className='outline-none border border-2 border-black w-full text-base rounded-full p-2'/>

                    <div className='text-lg text-black font-semibold pb-2 pl-2 pt-3'>Email</div>
                    <input type="text" className='outline-none border border-2 border-black w-full text-base rounded-full p-2'/>

                    
                    <div className='text-lg text-black font-semibold pb-2 pl-2 pt-3'>Message</div>
                    <textarea placeholder='Enter your message' className='outline-none border border-2 border-black w-full rounded-lg p-2 tst-base'/>
                    

                    <button className='flex items-center gap-2 p-2 submit-btn rounded-lg mt-3'>
                        <>Submit</> <ArrowCircleRightIcon className='text-lg text-white'/>
                    </button>
                </form>
            </div>

            <div className='col-span-6 flex flex-col items-center'>
                <div className='bg-yellow-500 w-3/4 rounded-lg mt-10 font-bold text-3xl text-center text-white relative exp-header h-14'>
                       <span className='inline-block align-middle'> Share your experince with us</span>
                </div>

                <div className='flex flex-col w-1/2 items-center'>
                    <div className='bg-green-500 w-full rounded-lg mt-10 font-bold text-3xl text-center text-white relative exp-header h-14'>
                       <span className='inline-block align-middle'> Send Message</span>
                    </div>
                    <ArrowDownwardIcon className='text-blue-800' fontSize='large'/>
                    <div className='bg-green-500 w-full rounded-lg font-bold text-3xl text-center text-white relative exp-header h-14'>
                       <span className='inline-block align-middle'>Get Reply</span>
                    </div>
                    <ArrowDownwardIcon className='text-blue-800' fontSize='large'/>
                    <div className='bg-green-500 w-full rounded-lg font-bold text-3xl text-center text-white relative exp-header h-14'>
                       <span className='inline-block align-middle'>Stay Connected</span>
                    </div>
                </div>
               
                
                
            </div>
            

        </div>
    </div>
  )
}
