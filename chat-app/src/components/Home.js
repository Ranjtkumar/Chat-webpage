import React from 'react'
import { Carousel,Card } from 'react-bootstrap'
import RecentChats from './RecentChats'
import Feedback from './Feedback'
import Footer from './Footer'

export default function Home() {

  const Indices = [
    {

      image:"/assets/cahts/symbolmsg.png",
      content:"one to one chat on talk positive"
    },
    {

      image:"/assets/cahts/messagesymb.png",
      content:"any one upon RN for late night random chat"
    },
    {

      image:"/assets/cahts/privacy.png",
      content:"Hide your personals and open up your taughts"
    }
  ]

  return (
    <div>
        
        <Carousel >
          <Carousel.Item className='border-0 p-0 bg-white'>
            <div className='w-full grid grid-cols-12 py-5 px-20 gap-10' style={{backgroundColor:"blueviolet"}}>
                <div className='text-5xl col-span-6 leading-normal text-white font-bold'>
                  The Internet Transforming Society and Shaping The Future Through The Chat
                </div>
                <div className='col-span-6'>
                  <img className='w-full h-96' src="/assets/chatimg.jpg"/>
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='border-0 p-0 bg-white'>
            <div className="grid grid-cols-12 py-5 px-20 gap-10"  style={{backgroundImage:`url('/assets/chatbg1.jpg')`}}>
              <div className='col-span-6 text-blue-700 rounded-4  border-4 border-blue-600 font-semibold bg-amber-300 flex flex-col items-center py-4 text-center' >
                <div className='text-5xl'>FRIENDSHIP IS</div>
                <div className='flex mt-10 gap-x-10 '>
                  <img src="/assets/chaticon1.png" className=' rounded-full h-28 w-28'/>
                  <img src="/assets/personchat.jpg" className=' rounded-full h-28 w-28'/>
                </div>
                
                <div className='text-4xl font-bold px-10 pt-4 text-sky-600'>
                    ...a never-ending Supply of GREAT Conversations
                </div>
              </div>
              <div className='flex col-span-6'>
                <img src="/assets/grpchat.jpg" className='h-96 w-full'/>
              </div>

            </div>
          </Carousel.Item>
          <Carousel.Item className='border-0 p-0 bg-white'>
            <div className='grid grid-cols-12 px-20 py-5 gap-10' style={{backgroundImage:"url('/assets/chatbg2.jpg')"}}>
              <div className='col-span-6 text-5xl leading-normal text-white font-bold'>
                <div className='bg-lime-700 border-[10px] border-rose-700 rounded-4 p-3'>
                  <em>Some talk to you in their free time and some free their time to talk to you</em>
                </div>
                
              </div>
              <div className='col-span-6'>
                <img src="/assets/chatpeople.jpg" className='h-96 w-full'/>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        
        {/* <RecentChats/> */}

        <div className='grid grid-cols-12 mt-5'>
          <div className='col-span-6 h-full'>
            <img src="/assets/cahts/convers.png" className='h-[35rem] w-full'/>
          </div>

          <div className='col-span-6 flex flex-col justify-center items-center text-2xl font-semibold w-full px-5'> 
            <i>"Thinking of internet chat rooms or AIM as a kind tere's a such intimacy and honest 
              to tapping on your phone ,despite how quick people are to damn digital means of communication
              as emotionless or to abatract."</i>

              <div className='flex mt-2 bg-blue-500 w-full justify-center py-4 mt-4 relative'>
                  <img src="/assets/cahts/talk.jpg" className='h-64 w-64 rounded-md'/>

                  <div className='absolute text-white  h-6 w-5 rounded-br-3xl top-0 left-0 bg-white'></div>
                  <div className='absolute text-white  h-6 w-5 rounded-bl-3xl top-0 right-0 bg-white'></div>
                  <div className='absolute text-white  h-6 w-5 rounded-tr-3xl bottom-0 left-0 bg-white'></div>
                  <div className='absolute text-white  h-6 w-5 rounded-tl-3xl bottom-0 right-0 bg-white'></div>

                  <img src="/assets/cahts/chatimg.jpg" className='absolute top-10 left-5 h-16 w-16 rounded-full'/>
                  <img src="/assets/cahts/chatimg1.png" className='absolute bottom-14 left-16 h-20 w-20 rounded-full'/>

                  <img src="/assets/cahts/chatred.png" className='absolute bottom-14 right-16 h-20 w-20 rounded-full'/>
                  <img src="/assets/cahts/group.jpg" className='absolute top-10 right-5 h-20 w-20 rounded-full'/>
              </div>
          </div>
        </div>

        <div className='grid grid-cols-12 mt-10'>
          <div className='col-span-6 border-[20px] bg-slate-400 border-l-green-500 border-t-yellow-500 border-r-red-600 border-b-blue-700'>
            <Carousel >
              <Carousel.Item className='border-0 p-0'>
                <img src="/assets/cahts/quotes/quote1.jpg" className='h-80 w-full'/>
              </Carousel.Item>
              <Carousel.Item className='border-0 p-0'>
                <img src="/assets/cahts/quotes/quote2.jpg" className='h-80 w-full'/>
              </Carousel.Item>
              <Carousel.Item className='border-0 p-0'>
                <img src="/assets/cahts/quotes/quote3.jpg" className='h-80 w-full'/>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className='col-span-6 px-4 flex gap-4 justify-center ' style={{backgroundImage:`url('/assets/cahts/chatBG.jpg')`}}>
            {
              Indices.map((each,index)=>(
                <div className={` p-4 my-10 rounded-lg flex flex-col p-4 items-center border-[8px] border-teal-500
                  ${index == 0 ? "bg-[#FF4500]": index == 1 ? "bg-[#68921E]" : "bg-[#e1ad01]"}`}>
          
                  <img src={each?.image} className='h-20 w-20 rounded-full'/>
                  <dfn className="text-xl text-white text-center font-semibold pt-3">
                    "{each?.content}"
                  </dfn>
                </div>
              ))
            }
          </div>


        </div>

        <Feedback/>

        <Footer/>
    </div>
  )
}
