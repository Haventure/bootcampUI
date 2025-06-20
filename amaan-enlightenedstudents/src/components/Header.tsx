import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 -mt-4 mb-4 md:mb-0">
      <img src="https://enlightenedstudents.com/wp-content/uploads/2021/01/ES_primary.png" alt="" className='w-[350px]'/>
      
    </a>
    <nav className="md:ml-auto flex flex-wrap text-2xl text-black font-bold items-center justify-center">
      <a className="mr-4 hover:text-gray-900">TOUR</a>
      <a className="mr-4 hover:text-gray-900">STORE</a>
    <button
  className="text-white mr-2 bg-[#9a5ba4] border-[3px]  hover:bg-pink-400 cursor-pointer px-6 py-3 rounded-full transition duration-300"
>
  SIGN UP
</button>

      <a className="mr-6 hover:text-gray-900">DONATE</a>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header
