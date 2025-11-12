"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStripePaymentintentMutation } from "@/lib/stripe";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { User } from "@/types/slicetypes";
import { Loader2, Sparkles } from "lucide-react";

const stripePromise = loadStripe(process.env.STRIPEKEY!);

const CheckoutForm = () => {
  const [amount, setAmount] = useState("20.00");
  const [currency, setCurrency] = useState("usd");
  const stripe=useStripe()
  const elements=useElements()
  const router=useRouter()
    const [loading, setLoading] = useState(false);
const [StripeFnc,{data,isLoading}]=useStripePaymentintentMutation()
  const singleUserslector=useSelector((state:{userSlice:User})=>state?.userSlice)

  useEffect(()=>{
   if (isLoading) {
    setLoading(true)
   }
  },[isLoading])
    const Hanglepayment=async()=>{
      const form=new FormData()
      form.append("email",singleUserslector.email)
        StripeFnc(form)
          
        

  
    }
    useEffect(()=>{
if(!data)return
      if (!stripe || !elements || !data?.clientSecret) {
  alert("Stripe is not ready yet");
  return;
}

const cardElement = elements.getElement(CardElement);
if (!cardElement) {
  alert("Card details not found");
  return;
}

const sendclienttostripe=async()=>{
  const result = await stripe.confirmCardPayment(data.clientSecret, {
  payment_method: {
    card: cardElement,
  },
  
});
if (result?.paymentIntent?.status=="succeeded") {
    toast.success(result?.paymentIntent?.status)
    router.push('/')
    }else{
    toast.error(result?.paymentIntent?.status)
    setLoading(false)
    }
} 
sendclienttostripe()

    
    },[data])
  return (
    <form className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        💳 Stripe Payment Demo
      </h2>

      {/* Amount Input */}
      <label className="block mb-3">
        <span className="text-sm font-medium">Amount</span>
        <input
        readOnly
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="20.00"
        />
      </label>

      {/* Currency Dropdown */}
      <label className="block mb-3">
        <span className="text-sm font-medium">Currency</span>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="usd">USD</option>
        </select>
      </label>

      {/* Card Input */}
      <div className="p-3 border rounded mb-4 bg-white">
        <CardElement options={{ hidePostalCode: false }} />
      </div>

      {/* Button (disabled since no backend) */}
      <button disabled={loading}
        type="button"
        
        className="w-full bg-blue-500 cursor-pointer text-white py-2 rounded"
        onClick={()=>Hanglepayment()}
      >
        {loading ? (
              <>
              <span className="w-full flex justify-center">
                <Loader2 className="animate-spin w-4 h-4" /> 

              </span>
              </>
            ) : (
              <>
        Pay {amount} {currency.toUpperCase()}

              </>
            )}
      </button>

      <p className="text-sm text-gray-500 text-center mt-3">
        (Demo only — backend integration not added)
      </p>
    </form>
  );
};

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;
