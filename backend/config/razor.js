// here will be making the configuration of razorpay for payment

import Razorpay from "razorpay";

const razor = Razorpay(process.env.RAZOR_SECRET_KEY);
