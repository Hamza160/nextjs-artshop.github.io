import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className='p-3 border-b-2 border-[#f5f3ff]'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <div className='flex items-center'>
                <Image src={'/logo.png'} width={50} height={50} alt='Logo'/>
                <h1 className='ml-2 text-2xl lg:text-3xl font-bold'>Artistry Market</h1>
            </div>
            <div className='flex items-center relative'>
                <FaShoppingCart className='text-3xl text-[#5B20B6] cursor-pointer'/>
                <div className='ml-2 bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm font-semibold'>1</div>
            </div>
        </div>
    </div>
  )
}

export default Header