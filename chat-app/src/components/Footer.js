import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function() {

    const details  = [
        {
            title:"Email",
            detail:"support@chatamps.com"
        },
        {
            title:"Phone No",
            detail:"+91 8825423728",
        },
        {
            title:"Address",
            detail:"45/6,xxx colony,yyy Street, Coimbatore"
        }
    ]

    return (
        <div className='grid grid-cols-12 bg-[#172B4C] w-[100%] px-10 py-5'>
            <div className='col-span-6'>
                <div className='text-4xl text-white font-bold'>Let's Talk</div>

                <div className='text-lg text-white py-3 w-5/6'>
                   
                   <dfn> <q> Every moment starts with chat. Deep conversation with people are price less.The 
                    Best conversation are curious about everything. That's why they are good at listening 
                    and why they have broad horizons - they're always learning something new.</q></dfn>

                  
                </div>

                <button className='bg-green-600 text-lg text-white font-bold py-3 px-4 hover:bg-green-400 rounded-full'>
                    Start Chatting</button>

            </div>

            <div className='col-span-6 mr-10'>
                <div className='flex flex-col items-end gap-4'>

                    {
                        details?.map((each)=>(
                            <div className='flex gap-12 text-lg font-semibold'>
                                <div className='text-white w-28 text-start'>{each?.title}</div>
                                <div className='text-sky-500 w-56'>{each?.detail}</div>
                            </div>
                        ))
                    }
                    

                   
                </div>

                <div className='flex justify-end gap-8 mr-10 mt-5'>
                    <TwitterIcon className='text-gray-600' style={{fontSize:"3rem"}}/>
                    <FacebookOutlinedIcon className='text-gray-600' style={{fontSize:"3rem"}}/>
                    <InstagramIcon className='text-gray-600' style={{fontSize:"3rem"}}/>
                    <LinkedInIcon  className='text-gray-600' style={{fontSize:"3rem"}}/>
                </div>

            </div>

        </div>
    )
}
