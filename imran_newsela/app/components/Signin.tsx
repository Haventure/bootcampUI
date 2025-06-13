"use client"

import Link from 'next/link';
import Image from 'next/image';


import { ChevronDown,ChevronUp ,SquareArrowOutUpRight } from 'lucide-react';

import google from '@/public/google.png';
import clever from '@/public/clever.png';
import window from '@/public/window.png';
import school from '@/public/Schoool.png';
import clas from '@/public/class.png';
import canvas from '@/public/canvas.png';
import redirect from '@/public/redirect.png';

import {  useContext, useState } from 'react';



const Signin = () => {
    
    const [showPassword,setShowPassword] = useState(false)

    const [showCart,setShowCart]= useState(false);

    const ToggleShowCart = () => {
        setShowCart((prev)=>(prev === false ? true : false ))    
    };

  return (
    <div>
       <div className='mt-12 flex justify-center' >
            <div className='flex justify-center box-border size-auto  p-8 rounded-3xl bg-white'>
             
             {/* left  */}
             <div className='p-5 ml-5 mr-5'>  
             <p className='text-3xl font-bold text-center'>
              Sign in through a provider</p> 
              <p className='mt-3 text-[20px] text-center'>
              Already have classes set up? Sync your classes </p>
              <p className='text-[20px] text-center'>
              by signing in through that provider.</p>

              <div> 
                <button className='flex mt-6 w-full text-[20px] p-2 rounded-lg shadow-gray-300 border-gray-100 border-[1px] shadow-lg '>
                <Image className='w-11' src={google} alt='google'/>
                 <p className='p-2'> Sign in with Google  </p> </button> </div>

                 <div> 
                <button className='bg-blue-700/80 flex mt-3 w-full text-[20px] p-2 rounded-lg shadow-gray-300 border-gray-100 border-[1px] shadow-lg '>
                <Image className='w-12' src={clever} alt='google'/>
                 <p className='p-1 text-white '> Sign in with Clever  </p> </button> </div>

                 <div> 
                <button className='bg-black flex mt-3 w-full text-[20px] p-2 rounded-lg shadow-gray-300 border-gray-100 border-[1px] shadow-lg '>
                <Image className='p-2  w-12' src={window} alt='google'/>
                 <p className='p-2 text-white '> Sign in with Microsoft  </p> </button> </div>


                 {/* anotherLMS */}

                 <div>
                 <button className='flex  mt-3 w-full text-[20px] p-2 rounded-lg border-1 border-gray-300 '
                 onClick={()=>{ToggleShowCart()}}>
                 <p className='p-2 '>  Sign in through another LMS     </p> 
                 <div style={{ display: showCart ? 'none' : ' ' }}>
                    <ChevronDown className='mt-2 ml-25 size-8 '/>
                 </div>
                 <div style={{ display: showCart ? ' ' : 'none' }}>
                    <ChevronUp className='mt-2 ml-25 size-8 '/>
                 </div>
                 

                 </button> </div>
                 

                <div className='grid grid-cols-1' style={{ display: showCart ? ' ' : 'none' }}>
                    
                    <div className='flex'>
                    <button className='flex mt-3 w-full text-[20px] p-2 rounded-lg bg-gray-100 border-gray-100 border-[1px]'>
                    <Image className='w-11' src={school} alt='school'/>
                    <p className='p-2'> Sign in from Schoology  </p> 
                    <Image className='w-9 h-9 ml-25' src={redirect} alt='redirect'/> </button> 
                    </div>

                    <div className='flex'>
                    <button className='flex mt-3 w-full text-[20px] p-2 rounded-lg bg-gray-100 border-gray-100 border-[1px]'>
                    <Image className='w-11' src={clas} alt='class'/>
                    <p className='p-2'> Sign in from ClassLink  </p> 
                    <Image className='w-9 h-9 ml-26' src={redirect} alt='redirect'/> </button> 
                    </div>
                    

                    <div className='flex'>
                    <button className='flex mt-3 w-full text-[20px] p-2 rounded-lg bg-gray-100 border-gray-100 border-[1px]'>
                    <Image className='w-11' src={canvas} alt='canvas'/>
                    <p className='p-2'> Sign in from Canvas  </p> 
                    <Image className='w-9 h-9 ml-30' src={redirect} alt='redirect'/> </button> 
                    </div>

                </div>
                
                        <p className='mt-3 text-[20px] text-center'>
                        Still having trouble signing in? Reach out to your </p>

                <div className='flex justify-center'>
                        <div className='text-[20px] text-center'>
                        IT Admin or see our <a href='' className='text-blue-900 underline'> Support Center </a></div>
                        <div> <SquareArrowOutUpRight className='ml-2 mt-2 size-4' /> </div>
                        <div> . </div>
              </div>

                


            </div>

            
            
            {/* Line */}

            <div className='mt-5 w-[1px] h-147 bg-gray-300' style={{ display: showCart ? 'none' : ' ' }}/>
        
            <div className='mt-5 w-[1px] h-180 bg-gray-300' style={{ display: showCart ? ' ' : 'none' }}/>

            {/* Right  */}
            <div className='p-5 ml-5 mr-5'>  
             <p className='text-3xl font-bold text-center'>
              Sign in through Newsela</p> 
              
              <div> 
                <div className='flex mt-4'>
                    <p className='mt-3 font-bold text-[17px] '> Username</p> 
                    <p className='text-blue-800 mt-2 ml-2 font-bold text-[25px] '> *</p>
                </div>
                <input type="email" className=' px-3 py-2  mt-1 w-[450px] border-1 p-2 rounded-lg h-15 text-[20px]' /> 
             </div>

             <div> 
                <div className='flex mt-6'>
                    <p className='mt-5 font-bold text-[17px] '> Password</p> 
                    <p className='text-blue-800 mt-4 ml-2 font-bold text-[20px] '> *</p>
                    
                    <button className='text-blue-800 mt-5 ml-70  text-[18px] hover:bg-gray-200 rounded-lg pr-2 pl-2 hover'
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}> 
                    <a href="#" > {showPassword ? "Hide" : "Show"} </a> </button>
                    
                </div>
                <input type={showPassword ? "text" : "password"}
                        name="password"
                        id="password" className=' px-3 py-2  mt-1 w-[450px] border-1 p-4 rounded-lg h-15 text-[22px]' /> 
             </div>
             
             <div>
             
             <a href="#"> 
              <p className='mt-14 w-[450px]  p-4 rounded-lg border-gray-400 text-[20px] text-center text-white bg-blue-900 hover:bg-blue-800'
             >
            Sign in  </p> </a>
             
             </div>

             <div>
             <a href="#">
             <p className='mt-2 w-[450px]  p-4 rounded-lg border-gray-400 text-[20px] text-center text-blue-900 hover:bg-gray-200'
             >
              Forgot password </p>
             </a>
             </div>


             <div>
             <p className='mt-6 w-[450px] rounded-lg border-gray-400 text-[20px] text-center'
             >
              Not a member yet? </p>
             </div>

            <div className='text-[20px] text-center'>
             <a href='' className='text-blue-900 underline'> Sign up </a>
            </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Signin