import Image from 'next/image';
import newsela from '@/public/newsela.webp';


const Header = () => {
  return (
    <div className='flex bg-white justify-center' >
    <Image className='m-2 w-52' src={newsela} alt='Newsela'/>
    </div>
  )
}

export default Header