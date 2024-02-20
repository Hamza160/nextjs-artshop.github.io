'use client';
import * as React from 'react';
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import useCartStore from '../cartStore';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
const Cart = () => {
    const cart = useCartStore((state:StateInterface) => state.cart);
    const removeFromCart = useCartStore((state:StateInterface) => state.removeFromCart);
    const cartTotal = useCartStore((state:StateInterface) => state.cartTotal);
    const totalItems = useCartStore((state:StateInterface) => state.totalItems);
    
    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
    }   

    const stripe = useStripe()
    const elements = useElements()

    const onSubmit = async () => {
        const cardElement  = elements?.getElement("card")

        try{
            if(!stripe || !cardElement) return null;

            const data = await axios.post(`/api/stripe`, {
                data:{
                    amount:cartTotal
                }
            })

            console.log(data)
            const res = await stripe.confirmCardPayment(data?.data?.intent, {
                payment_method:{
                    card: cardElement
                }
            }) 

            const status = res?.paymentIntent?.status;

            console.log(status)

        }catch(error){

        }

    }

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
                    {cart.map((product: Product) => (
                        <tr key={product._id} className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]">
                            <td className="py-2 px-4 flex items-center gap-2">
                                <Image src={product.image} alt="image" width={40} height={40}/>
                                {product.name}
                            </td>
                            <td className="py-2 px-4">${product.price}</td>
                            <td className="py-2 px-4">{product.quantity}</td>
                            <td className="py-2 px-4">
                                <FaTrash onClick={() => handleRemoveFromCart(product._id)} className="text-[#5B20B6] mx-auto cursor-pointer"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <div className='space-x-4 mt-10'>
                    <span className='text-lg font-semibold text-[#5B20B6]'>Total</span>
                    <span className='text-lg font-semibold text-[#5B20B6]'>${cartTotal}</span>
                </div>

                <div className="mt-6 mb-6">
                    <label className='text-lg font-semibold text-[#5B20B6]'>Card Details</label>
                    <CardElement className='border border-gray-200 rounded-md p-4'/>
                </div>

                <div className='mt-6 max-w-sm mx-auto space-y-4'>
                    <button onClick={onSubmit} className='bg-[#5B20B6] text-white py-3 px-6 rounded-md w-full text-lg font-semibold'>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart