
import Image from 'next/image';
import amazon from '@/public/Amazon_logo.svg.png';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div >
        <Link href={'/'}>
        <div className='flex justify-center' >
        <Image className='m-5 w-32 ' src={amazon} alt='amazon'/>
        </div>
        </Link>
        
    </div>
  )
}

export default Navbar