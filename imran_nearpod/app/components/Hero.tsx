import Image from "next/image";
import background from '@/public/bg.png';

const Hero = () => {
  return (
    <div className="w-full h-full ">
        <Image
      src={background}
      alt="success"
      quality={100}
      className="-z-10 object-cover"
      fill
    />
    
  </div>
  )
}

export default Hero