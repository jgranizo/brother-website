'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function CheckoutPage() {
  // If NOT using context, just uncomment the next line:
  // const [cart, setCart] = useState(true);
  const { cart } = { cart: true }; // fallback for standalone

  const [process, setProcess] = useState("shipping");

  // Shipping state
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const shippingValid = email && first && last && address && phone;

  // Payment state
  const [payFirst, setPayFirst] = useState('');
  const [payLast, setPayLast] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [exp, setExp] = useState('');
  const paymentValid =
    payFirst &&
    payLast &&
    billingAddress &&
    cardNumber &&
    cvv &&
    exp;

  return (
    <div className="min-h-screen bg-gray-100 py-15">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-8 p-8">
        {cart ? (
          <>
            {/* Left: Forms */}
            <div className="w-full md:w-2/3">
              {/* Stepper/Indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className={`flex-1 h-1 rounded-full ${process !== "shipping" ? "bg-[#dbcfc3]" : "bg-gray-300"}`}></div>
                <div className={`mx-2 px-3 py-1 rounded-full text-sm font-bold
                  ${process === "shipping"
                    ? "bg-[#dbcfc3]  text-[#463F3A] "
                    : "bg-gray-300 text-gray-800"}`}>Shipping</div>
                <div className={`flex-1 h-1 rounded-full ${process === "payment" || process === "submitted" ? "bg-[#dbcfc3]" : "bg-gray-300"}`}></div>
                <div className={`mx-2 px-3 py-1 rounded-full text-sm font-bold
                  ${process === "payment"
                    ? "bg-[#dbcfc3]  text-[#463F3A]"
                    : process === "submitted"
                    ? "bg-[#dbcfc3]  text-[#463F3A]"
                    : "bg-gray-300 text-gray-800"}`}>Payment</div>
              </div>
              {/* Logistics Forms */}
              {process === 'shipping' && (
                <form className="flex flex-col gap-4 mb-8" onSubmit={e => e.preventDefault()}>
                  <label className="font-medium">Email
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">First Name
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray
-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={first}
                      onChange={e => setFirst(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Last Name
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={last}
                      onChange={e => setLast(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Address
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Phone Number
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                    />
                  </label>
                  <button
                    type="button"
                    className={`w-full ${shippingValid ? 'bg-[#dbcfc3]  text-[#463F3A] hover:bg-[#b49d85]' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold py-2 rounded transition-colors mt-2 shadow`}
                    disabled={!shippingValid}
                    onClick={() => {
                      if (shippingValid) setProcess("payment");
                    }}
                  >
                    Next: Payment
                  </button>
                </form>
              )}
              {process === 'payment' && (
                <form className="flex flex-col gap-4 mb-8" onSubmit={e => e.preventDefault()}>
                  <label className="font-medium">First Name
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={payFirst}
                      onChange={e => setPayFirst(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Last Name
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={payLast}
                      onChange={e => setPayLast(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Billing Address
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={billingAddress}
                      onChange={e => setBillingAddress(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Credit Card Number
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      value={cardNumber}
                      onChange={e => setCardNumber(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Security Code (CVV)
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="password"
                      value={cvv}
                      onChange={e => setCVV(e.target.value)}
                      required
                    />
                  </label>
                  <label className="font-medium">Expiration Date
                    <input
                      className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="MM/YY"
                      type="text"
                      value={exp}
                      onChange={e => setExp(e.target.value)}
                      required
                    />
                  </label>
                  <button
                    type="button"
                    className={`w-full ${paymentValid ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold py-2 rounded transition-colors mt-2 shadow`}
                    disabled={!paymentValid}
                    onClick={() => {
                      if (paymentValid) setProcess("submitted");
                    }}
                  >
                    Submit Payment
                  </button>
                  <button
                    type="button"
                    className="underline text-blue-600 mt-2"
                    onClick={() => setProcess("shipping")}
                  >
                    Back to Shipping
                  </button>
                </form>
              )}
              {process === "submitted" && (
                <div className="text-center py-16">
                  <h1 className="text-3xl font-bold text-green-700 mb-4">Thank you for ordering!</h1>
                  <p className="text-gray-600 mb-6">
                    You will receive a confirmation email about your order shortly.
                  </p>
                  <Link href="/" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-bold shadow">Return to Home</Link>
                   
                
                </div>
              )}
            </div>
            {/* Cart Summary */}
            <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow self-start flex flex-col items-center justify-start">
              <h1 className="font-bold text-lg mb-2">Cart</h1>
              <div className="w-[200px] h-[130px] mb-4 border rounded-lg bg-white flex items-center justify-center overflow-hidden">
   {/* Image can now render at its intended size within the container */}
   <Image src="/bakingbox.png" alt="Cart item" width={200} height={200} className ="object-contain" /* Or remove object-cover/contain if aspect ratio matches */ unoptimized />
</div>

              <p className="text-gray-700 mb-2">
                Subtotal: <span className="text-blue-800 font-semibold">$39.99</span>
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-32 w-full">
            <h1 className="text-2xl font-bold text-gray-700">Cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
}

