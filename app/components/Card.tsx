import Image from "next/image"

const Card = () => {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
        <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300"> 
            <Image src={'/art1.jpg'} layout="fill" objectFit="cover" alt="art"/>
        </div>
        <div className="p-4 space-y-2">
            <h1 className="text-[#5B20B6] text-3xl font-semibold">Painting One</h1>
            <p className="text-xl text-gray-500 truncate">Description of the painting you are selling.</p>
            <br />
            <br />
        </div>

        <div className="absolute bottom-0 right-0 p-2 bg-[#f5f3ff] shadow-md">
            <span className="text-[#5B20B6 text-lg font-semibold">$200</span>
        </div>
    </div>
  )
}

export default Card