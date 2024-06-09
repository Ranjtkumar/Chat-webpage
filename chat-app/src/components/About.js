import React from 'react'

export default function About() {
  return (
    <div>
      <div className="w-full about py-4 flex">
        
        <div className='quotes w-56 relative ml-20 bg-[green] px-3 pt-2 font-bold '>
          <dfn className='text-xl text-white'>"Every message had ann importance at a moment"</dfn>
        </div>

        <div className='quotes w-56 relative ml-20 bg-[green] px-3 pt-2 font-bold '>
          <dfn className='text-lg text-white'>"Every expression comes with message, until not discourages"</dfn>
        </div>

        <div className='quotes w-56 relative ml-20 bg-[green] px-3 pt-2 font-bold '>
          <dfn className='text-xl text-white'>"Every Friendship starts with a small message."</dfn>
        </div>

        <div className='quotes w-56 relative ml-20 bg-[green] px-3 pt-2 font-bold '>
          <dfn className='text-xl text-white'>"Each message have an unnique mindfullness"</dfn>
        </div>

    
      </div>

      <div className='w-full grid grid-cols-12 gap-10 px-10 mt-10'>
        <div className='bg-blue-500 text-xl p-3 rounded-lg col-span-6'>
          <div className='text-white font-semibold border-b-2 border-green-300 pb-2'>Read Only</div>
          
          <div className='p-2 font-semibold text-white'>We are providing an Read only message fcility for privacy which cannot be support
            for an message options like copy and share to others
          </div>

        </div>

        <div className='bg-blue-500 text-xl p-3 rounded-lg col-span-6'>
          <div className='text-white font-semibold border-b-2 border-green-300 pb-2'>Re Sendable</div>
          
          <div className='p-2 font-semibold text-white'>
            You can able to send the previous message without copying and typing it in message field.
            Which can be forwared to others bsed on their privacy terms and condition
          </div>

        </div>
          
      </div>
    </div>
  )
}
