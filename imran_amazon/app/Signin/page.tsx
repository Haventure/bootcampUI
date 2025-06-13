

import Link from 'next/link';


const page = () => {
  return (
    <div >
 

        <div className='flex justify-center' >
            <div className='font-amazonEmber justify-center box-border size-auto border-2 p-8 rounded-lg'>
             <p className='text-2xl'>
              Sign in or create account</p> 
              <p className='mt-3 font-extrabold'>
                Enter mobile number or email</p>

               

             <div> <input type="email" className=' px-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-cyan-300 shadow-lg ring-4 ring-transparent focus:ring-cyan-100
             mt-1 w-96 border-2 p-2 rounded-lg border-gray-400' /> </div>

              <Link href={'/Password'}>
             <div> <button className='mt-4 w-96  p-2 rounded-full border-gray-400 bg-yellow-400  '
             >
              Continue </button> </div>
              </Link>

             <p className='mt-4 '>
              By continuing, you agree to Amazon's  
              <a href="" className='underline text-sky-700'> Conditions </a> </p>
              <p className=''>
              <a href="" className='underline text-sky-700'> of Use </a> and <a href="" className='underline text-sky-700'> Privacy Notice </a> </p>
              <a href="" className='text-sky-700'>
              <p className='mt-4 text-lg '>
                 Need help? </p> </a>
                 
              <hr className="mt-7 solid border-gray-300"/> 

              <p className='mt-3 text-lg font-extrabold'>
                  Buying for work?</p>
              <a href="" className='text-sky-700'>
              <p className='mt-1'>
                  Create a free business account</p> </a>

          </div>
            
        </div>
        
    </div>
  )
}

export default page