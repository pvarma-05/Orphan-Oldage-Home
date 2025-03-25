import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Replace with Test Key ID
    key_secret: process.env.RAZORPAY_KEY_SECRET, // Replace with Test Key Secret
});

export async function POST(request = NextRequest) {
    try {
        const body = await request.json();
        const { amount } = body; // Amount in INR (e.g., 500 = ₹500)
        console.log(amount)

        if (!amount) {
            throw new Error("Amount is required");
        }

        const options = {
            amount: amount * 100, // Convert to paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        if (!order) {
            throw new Error("Failed to create order");
        }

        return NextResponse.json({
            message: "Order created successfully",
            order,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
