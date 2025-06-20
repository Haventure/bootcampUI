import Image from "next/image";
import nearpod from '@/public/nearpod.png';
import google from '@/public/google.png';
import clever from '@/public/clever.png';
import window from '@/public/window.png';
import clas from '@/public/class.png';
import center from '@/public/center.png';
import { Mail,LockKeyhole } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className='mt-18 flex place-content-center'>
      <Image className='w-[450px]' src={nearpod} alt='nearpod'/>
      </div>
    <div className='mt-24 flex justify-center' >
         <div className='box-border border-[1px] border-gray-900 size-auto  p-8 rounded-xl bg-white'>
         
         <div className="fonttrue">
         <p className='text-3xl text-center'>
           Sign In  </p> 
           <p className='mt-3 text-[20px] text-center'>
           Don't have an account? 
           <a href='  ' className='text-sky-800/80 '> Sign up </a> </p>
         </div>

         <div className=' flex justify-center '>
          
          {/* left  */}
          <div className='mt-15 p-5 ml-5 mr-5 fonttrue'>  
          

           <div > 
             <button className=' flex place-content-center mt-3 w-[400px] text-[20px] p-1 rounded-lg shadow-gray-300 border-gray-300 border-[2px]'>
             <Image className='w-10 h-10' src={google} alt='google'/>
              <p className='p-1'> Sign in with Google  </p> </button> </div>

              <div> 
             <button className=' flex place-content-center mt-3 w-full text-[20px] p-1 rounded-lg shadow-gray-300 border-gray-300 border-[2px] '>
             <Image className='p-1 w-9 h-9' src={window} alt='google'/>
              <p className='p-1 text-black '> Sign in with Microsoft  </p> </button> </div>

              <div> 
             <button className='bg-blue-700/80 flex place-content-center mt-3 w-full text-[20px] p-[6px] rounded-lg shadow-gray-300 border-gray-100 border-[1px] shadow-lg '>
             <Image className='w-12' src={clever} alt='google'/>
              <p className='p-1 text-white '> Sign in with Clever  </p> </button> </div>

              <div className='flex'>
                    <button className='bg-cyan-950/90 flex place-content-center mt-3 w-full text-[20px] p-[6px] rounded-lg shadow-gray-300 border-gray-100 border-[1px] shadow-lg '>
                    <Image className='w-11' src={clas} alt='class'/>
                    <p className='p-1 text-white'> Sign in from ClassLink  </p> 
                     </button> 
              </div>

            
         </div>

         
         
         {/* Line */}

         <Image className='w-90 h-90 mt-8' src={center} alt='google'/>
         {/* <div className='mt-5 w-[1px] h-147 bg-gray-300' /> */}
     

         {/* Right  */}
         <div className='p-5 ml-5 mr-5 fonttrue'>  
        
           
           <div > 
             <div className='flex mt-4'>
                 <p className='mt-3 font-bold text-[17px] '> School email address</p> 
                 <p className='text-sky-800/80 mt-2 ml-2 font-bold text-[25px] '> *</p>
             </div>
             <div className="relative inline-block">
             <input type="email" className='px-12 py-2 mt-1 w-[450px] border-1 p-0 rounded-sm h-12 text-[18px]' 
               placeholder="jane.doe@gmail.com" /> 
               <Mail className='absolute ml-2 top-4'/>
             </div>

          </div>

          <div> 
             <div className='flex mt-6'>
                 <p className='mt-4 font-bold text-[17px] '> Password</p> 
                 <p className='text-sky-800/80 mt-3 ml-2 font-bold text-[20px] '> *</p>
                 
                 <button className='text-sky-800/80 mt-5 ml-70  text-[18px] hover:bg-gray-200 rounded-lg pr-2 pl-2 hover'
                 > 
                 </button>
                 
             </div>
             <div className="relative inline-block">
             <input 
                     type="password"
                     name="password"
                     id="password" className=' px-12 py-2  mt-1 w-[450px] border-1 p-2 rounded-sm h-12 text-[22px]' 
                     placeholder="********"/> 
                     <LockKeyhole className='absolute ml-2 top-4'/>
              </div>
              </div>
          
          
          <div className="mt-5">
          <div className="relative">
          <input type="checkbox" className="ml-0 mt-1 size-5 rounded-2xl" />
          <div className='absolute ml-6 top-0 rounded-lg border-gray-400 text-[18px] text-center'>
           Remember me </div>
           </div>
           </div>
          
           <div className="mt-[-27]">
          <a href="#">
          <div className='ml-45 rounded-lg border-gray-400 text-[18px] text-center text-sky-800/80 hover:bg-gray-200'>
           Forgotten your password? </div>
          </a>
          
          </div>
          

          <div>
          
          <a href="#"> 
           <div className='mt-2 w-[450px]  p-[10px] rounded-lg border-gray-400 text-[20px] text-center text-white bg-sky-800/80 hover:bg-sky-700/80'
          >
         Log in  </div> </a>
          
          </div>
          


          

        
         </div>
         </div>
     </div>
     </div>
 </div>
  );
}
