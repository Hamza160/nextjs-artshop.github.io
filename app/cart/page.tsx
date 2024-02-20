'use client';
import Cart from "../components/Cart";
import Header from "../components/Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Cartpage = () => {
  const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
  const stripePromise = loadStripe(PUBLISHABLE_KEY);


  return (
    <div>
        <Header />
        <Elements stripe={stripePromise}>
            <Cart />
        </Elements>
    </div>
  );
}

export default Cartpage;