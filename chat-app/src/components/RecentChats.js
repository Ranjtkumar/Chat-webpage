import React from 'react'
import { Card } from 'react-bootstrap'

export default function RecentChats() {
    return (
        <div>
            <div className='grid grid-cols-12 px-20 py-10 bg-slate-300'>
                <div className='col-span-4 bg-white w-full shadow-xl border-1 border-slate-500 rounded-lg px-3 py-2'>
                    <div className='flex border-b border-slate-200 items-center gap-3'>
                        <div >
                            <img src="/assets/EmptyPic.jpg" className='h-20 w-20 rounded-full'/>
                            <div className='flex flex-col gap-1'>
                                <div className='text-2xl font-bold'>Ranjitkumar</div>
                                <div className='text-xl text-gray-600'>
                                    12:30 PM
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}
