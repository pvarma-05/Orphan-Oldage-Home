"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("");
  const [error, setError] = useState("");

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const amount = parseInt(donationAmount);
    if (!donationAmount || isNaN(amount) || amount < 1) {
      setError("Please enter a valid donation amount (minimum ₹1)");
      return;
    }
    setError("");

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay. Please check your internet connection.");
      return;
    }

    try {
      const response = await axios.post("/api/createOrder", { amount });
      const order = response.data.order;
      if (!order || !order.id) {
        alert("Failed to create order. Please try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC_ prefix for client-side env vars
        amount: order.amount, // Amount in paise from backend
        currency: order.currency,
        name: "Orphan Old Age Home",
        description: "Donation Payment",
        image: "/logo.png", // Ensure logo.png is in /public folder
        order_id: order.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#578E7E",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      razorpay.on("payment.failed", function (response) {
        alert(`Payment Failed! Reason: ${response.error.description}`);
      });
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F6E6] pt-24">
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-outfit font-semibold text-[#578E7E] leading-tight">
              Your Contribution,<br />Their Smile
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700">
              Every donation brings hope and support to those in need.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <div className="relative w-full sm:w-auto flex-grow">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 font-poppins">₹</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="1"
                  className="w-full pl-8 pr-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#578E7E] font-poppins text-base sm:text-lg"
                />
              </div>
              <button
                onClick={handlePayment}
                className="px-6 py-3 bg-[#578E7E] text-white font-medium font-outfit text-lg rounded-xl hover:bg-[#466f65] transition duration-300 w-full sm:w-auto"
              >
                Donate Now
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm font-poppins mt-2 text-center lg:text-left">{error}</p>
            )}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/group.jpg"
              alt="Donate Illustration"
              width={400}
              height={400}
              className="max-w-full h-auto rounded-xl"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-outfit font-semibold text-[#578E7E]">Why Donate?</h2>
          <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700 text-center max-w-3xl">
            Your contributions support food, medical care, and maintenance for our residents.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
            {[
              { title: "Food", src: "/food.jpg", desc: "Nutritious meals for daily health." },
              { title: "Medical", src: "/medical.jpg", desc: "Health checkups and care." },
              { title: "Maintenance", src: "/maintenance.jpg", desc: "Safe, clean environment." },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#578E7E] text-white p-4 sm:p-5 rounded-xl shadow-md w-full max-w-sm mx-auto"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={180}
                  className="rounded-lg mb-4 object-cover w-full h-40 sm:h-48"
                  draggable={false}
                />
                <h3 className="text-lg sm:text-xl font-semibold font-outfit mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base font-poppins flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
