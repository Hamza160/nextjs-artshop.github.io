'use client'
import * as React from 'react';
import Image from "next/image";
import useCartStore from '../cartStore';

interface DetailsProps{
    product: Product
}

const Details: React.FC<DetailsProps> = ({product}) => {
    const [quantity, setQuantity] = React.useState<number>(1);
    const cart = useCartStore((state: StateInterface) => state.cart);
    const addToCart = useCartStore((state: StateInterface) => state.addToCart);
    console.log({cart})
    const handleAddToCart = () => {
        addToCart({product, quantity});   
    }

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-1 lg:grid-cols-2">
                {/* Left */}
                <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
                    <Image src={product.image} layout="fill" objectFit="cover" alt="image of painting"/>
                </div>
                {/* Right */}
                <div className="flex flex-col p-6 justify-between">
                    <h1 className="text-3xl font-semibold text-[#5B20B6]">{product.name}</h1>
                    <p className="text-lg mt-4 text-gray-500">{product.description}</p>

                    <div className="mt-5">
                        <span className="text-2xl font-semibold text-[#5B20B6]">${product.price}</span>
                    </div>

                    <div className="mt-6 flex flex-col text-gray-500">
                        <label htmlFor="">Qty</label>
                        <input 
                            type="number" 
                            defaultValue={1} 
                            value={quantity} 
                            onChange={(e) => 
                            setQuantity(+e.target.value)} 
                            className="w-20 px-4 h-10 border border-gray-300 rounded-md" 
                            />
                    </div>

                    <div className="mt-6">
                        <button className="px-6 bg-[#5B20B6] text-white py-3 rounded-md" onClick={handleAddToCart}>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Details