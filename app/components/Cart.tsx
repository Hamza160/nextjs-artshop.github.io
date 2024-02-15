import Image from "next/image";
import { FaTrash } from "react-icons/fa";
const Cart = () => {
    const products = [
        {id:1, name:'Painting 1', price:100, qty:2},
        {id:2, name:'Painting 2', price:200, qty:2},
    ];
    return (
        <div className="max-w-3xl mx-auto mt-20">
            <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">Cart</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-[#5B20B6] border-b border-gray-200">
                        <th className="px-4 py-3">Product</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Qty</th>
                        <th className="px-4 py-3">Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]">
                            <td className="py-2 px-4 flex items-center gap-2">
                                <Image src={'/art1.jpg'} alt="image" width={40} height={40}/>
                                {product.name}
                            </td>
                            <td className="py-2 px-4">${product.price}</td>
                            <td className="py-2 px-4">{product.qty}</td>
                            <td className="py-2 px-4">
                                <FaTrash className="text-[#5B20B6] mx-auto cursor-pointer"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Cart