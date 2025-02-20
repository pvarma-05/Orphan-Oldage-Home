"use client";
import React from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Donate() {
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
        const isLoaded = await loadRazorpayScript();

        if (!isLoaded) {
            alert("Failed to load Razorpay. Please check your internet connection.");
            return;
        }

        try {
            // Call the backend to create an order using Axios
            const response = await axios.post("/api/createOrder", { amount: 500 }); // Amount in INR (e.g., 500 = ₹500)
            const order = response.data.order;

            if (!order.id) {
                alert("Failed to create order. Please try again.");
                return;
            }

            // Initialize Razorpay
            const options = {
                key_id: process.env.RAZORPAY_KEY_ID, // Razorpay Test Key ID
                amount: order.amount,
                currency: order.currency,
                name: "Orphan Old Age Home",
                description: "Donation Payment",
                image: "/logo.png", // Add your logo path here
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
        <main>
            <section className="flex flex-col justify-center items-center sm:h-[80vh] lg:h-[112vh] sm:mx-10 lg:mx-32">
                <div className="flex sm:flex-col-reverse lg:flex-row sm:justify-center lg:justify-between w-full gap-5">
                    <div className="flex flex-col justify-center items-center lg:items-start sm:w-full lg:w-1/2 gap-10">
                        <h1 className="sm:text-3xl lg:text-5xl sm:w-full font-outfit font-semibold">
                            Your Contribution,<br />Their Smile
                        </h1>
                        <p className="sm:text-base lg:text-lg font-poppins text-gray-700 leading-relaxed">
                            Every donation you make brings hope, education, and support to those in need. Together, we can build a better future for orphans and the elderly. Your kindness makes an immeasurable difference.
                        </p>
                        <button className='p-5 bg-[#578E7E] text-white font-medium font-outfit sm:text-xl lg:text-2xl  rounded-xl hover:bg-[#466f65] transition '
                        onClick={handlePayment}
                        >
                            Donate Now
                        </button>
                    </div>
                    <div className="flex sm:w-full lg:w-1/2 sm:justify-center lg:justify-end">
                        <Image
                            // src="/donate-hero.svg"
                            src={"/group.jpg"}
                            alt="Donate Illustration"
                            width={600}
                            height={600}
                            draggable={false}
                            className='rounded-lg'
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center gap-16 items-center  lg:h-[112vh] sm:mx-10 lg:mx-32">
                <div className="flex flex-col items-center w-full gap-6">
                    <h2 className="sm:text-2xl lg:text-4xl font-outfit font-semibold">Why Donate?</h2>
                    <p className="sm:text-base sm:text-left lg:text-center lg:text-lg font-poppins text-gray-700 text-center leading-relaxed max-w-3xl">
                        Your contributions directly support essential services like food, medical care, and maintenance for our residents. Every donation ensures they live with dignity, comfort, and happiness.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                    <div className='flex flex-col bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
                        <Image
                            width={400}
                            height={300}
                            alt='Food for Residents'
                            src={"/food.jpg"} // Replace with the actual image path
                            className='rounded-lg mb-5 object-cover'
                            draggable={false}
                        />
                        <h3 className='text-xl font-semibold mb-3 font-outfit'>Food</h3>
                        <p className='text-gray-200 font-outfit'>
                            Help us provide nutritious meals to our residents, ensuring they have the energy and health to thrive daily.
                        </p>
                    </div>
                    <div className='flex flex-col bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
                        <Image
                            width={400}
                            height={300}
                            alt='Medical Care'
                            src={"/medical.jpg"} // Replace with the actual image path
                            className='rounded-lg mb-5 object-cover'
                            draggable={false}
                        />
                        <h3 className='text-xl font-semibold mb-3 font-outfit'>Medical</h3>
                        <p className='text-gray-200 font-outfit'>
                            Your donations fund critical medical services, regular health checkups, and emergency care for those in need.
                        </p>
                    </div>
                    <div className='flex flex-col bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
                        <Image
                            width={400}
                            height={300}
                            alt='Maintenance Support'
                            src={"/maintenance.jpg"} // Replace with the actual image path
                            className='rounded-lg mb-5 object-cover'
                            draggable={false}
                        />
                        <h3 className='text-xl font-semibold mb-3 font-outfit'>Maintenance</h3>
                        <p className='text-gray-200 font-outfit'>
                            Support the upkeep of our facilities, ensuring a safe, clean, and welcoming environment for all residents.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
