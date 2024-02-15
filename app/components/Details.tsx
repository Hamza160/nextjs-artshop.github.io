import Image from "next/image"

const Details = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-1 lg:grid-cols-2">
            {/* Left */}
            <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
                <Image src={'/art1.jpg'} layout="fill" objectFit="cover" alt="image of painting"/>
            </div>
            {/* Right */}
            <div className="flex flex-col p-6 justify-between">
                <h1 className="text-3xl font-semibold text-[#5B20B6]">Painting Name</h1>
                <p className="text-lg mt-4 text-gray-500">This is the description of the painting.</p>

                <div className="mt-5">
                    <span className="text-2xl font-semibold text-[#5B20B6]">$100</span>
                </div>

                <div className="mt-6 flex flex-col text-gray-500">
                    <label htmlFor="">Qty</label>
                    <input type="text" defaultValue={1} className="w-20 px-4 h-10 border border-gray-300 rounded-md" />
                </div>

                <div className="mt-6">
                    <button className="px-6 bg-[#5B20B6] text-white py-3 rounded-md">Add to Cart</button>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Details