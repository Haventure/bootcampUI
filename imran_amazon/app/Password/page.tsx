import Link from 'next/link';

const password = () => {
  return (
    <div >
 

    <div className='flex justify-center' >
        <div className='font-amazonEmber justify-center box-border size-auto border-2 p-8 rounded-lg'>
         <p className='text-4xl'>
          Sign in </p> 
          
          <p className='mt-3 '>
            constant@gmail.com     
            <a href="" className='text-sky-700'>  Change </a> </p>

            <div className='grid grid-cols-2 '>
            <p className='mt-3 font-extrabold '>
            Password     </p> 
            <p className='mt-3 '>
            <a href="" className='text-sky-700'>  Forgot Password? </a>   
            </p>
            </div>

         <div> <input type="password" className=' px-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-cyan-300 shadow-lg ring-4 ring-transparent focus:ring-cyan-100
         mt-1 w-96 border-2 p-2 rounded-lg border-gray-400' /> </div>

          <Link href={''}>
         <div>   <button className='mt-8 mb-6 w-96  p-2 rounded-full border-gray-400 bg-yellow-400  '
         >
          Sign in</button> </div>
          </Link>
          </div>
        </div>
      </div>
  )
}

export default password