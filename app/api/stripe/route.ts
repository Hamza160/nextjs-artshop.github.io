import { NextResponse } from "next/server";
import Stripe from "stripe";

const SECRET_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;

const stripe = new Stripe(SECRET_KEY);

export const Post = async (req) => {
    const {data} = await req.json();
    const {amount} = data;

    try{
        const payIntent = await stripe.paymentIntents.create({
            amount: Number(amount),
            currency: 'USD'
        });        
        return NextResponse.json({status:200, intent:payIntent?.client_secret});
    }catch(error){
        return NextResponse.json({status: 400});
    }

}