"use client"

import PageHeading from "@/components/PageHeading";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function loadRazorpayScript(src) {
    return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve(true);
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

export default function DonationSection() {
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const [manualAmount, setManualAmount] = useState("");
    const [manualFocused, setManualFocused] = useState(false);

    const [showThankYou, setShowThankYou] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();

    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);

    // Validation states
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formError, setFormError] = useState("");

    // Reset form after successful payment and when user comes back
    useEffect(() => {
        if (!showThankYou) {
            setManualAmount("");
            setSelectedAmount(1000);
            if (nameRef.current) nameRef.current.value = "";
            if (emailRef.current) emailRef.current.value = "";
            setNameError("");
            setEmailError("");
            setFormError("");
        }
    }, [showThankYou]);

    const validate = () => {
        let valid = true;
        setNameError("");
        setEmailError("");
        setFormError("");

        const nameValue = nameRef.current?.value?.trim() || "";
        const emailValue = emailRef.current?.value?.trim() || "";

        if (!nameValue) {
            setNameError("Name is required.");
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
            setNameError("Name must contain only letters.");
            valid = false;
        }

        if (!emailValue) {
            setEmailError("Email is required.");
            valid = false;
        } else if (
            !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(emailValue)
        ) {
            setEmailError("Enter a valid Gmail address (e.g., relishgupta@gmail.com).");
            valid = false;
        }

        if (!valid) setFormError("Please fill all the fields.");
        return valid;
    };

    const getAmount = () => {
        if (manualAmount) return manualAmount;
        if (selectedAmount) return selectedAmount;
        return 0;
    };

    const handleDonate = async () => {
        if (!validate()) return;

        const amount = getAmount();
        if (!amount) {
            setFormError("Please fill all the fields.");
            return;
        }

        const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // 1. Create Razorpay order
        const { data: order } = await axios.post("/api/razorpay", { amount });

        // 2. Open Razorpay checkout
        const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: "Anmol Cultural Club",
            description: "Donation",
            order_id: order.id,
            handler: async function (response) {
                setShowThankYou(true); 

                axios.post("/api/send-donation-email", {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    amount,
                    paymentId: response.razorpay_payment_id,
                });
            },
            prefill: {
                name: nameRef.current.value,
                email: emailRef.current.value,
            },
            theme: { color: "#f97316" },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setManualAmount("");
    };

    const handleManualFocus = () => {
        setManualFocused(true);
        setSelectedAmount(null);
    };

    const handleManualBlur = () => {
        if (manualAmount === "") setManualFocused(false);
    };

    const handleManualChange = (e) => {
        setManualAmount(e.target.value.replace(/[^0-9]/g, ""));
        setSelectedAmount(null);
    };

    return (
        <>
            <PageHeading title="Donate" breadcrumbs={["Donate"]} />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-28 py-16 md:py-28 bg-white max-w-screen mx-auto">
                {/* Left Section */}
                <div className="max-w-2xl">
                    <button className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full mb-10">
                        Donate Now
                    </button>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Your Support Makes a Difference
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Your donation enables us to organize cultural, educational, and social initiatives for those in need. Join us in making a meaningful impact — no amount is too small!
                    </p>

                    {/* Impact Stats from AboutIntro */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                        <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                            <span className="text-4xl font-extrabold text-orange-500 mb-2">
                                <CountUp end={10000} duration={3} separator="," />+
                            </span>
                            <span className="text-gray-700 font-semibold text-center">Meals Provided to the Needy</span>
                        </div>
                        <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                            <span className="text-4xl font-extrabold text-orange-500 mb-2">
                                <CountUp end={500} duration={3} separator="," />+
                            </span>
                            <span className="text-gray-700 font-semibold text-center">Girls Supported for Marriage</span>
                        </div>
                        <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                            <span className="text-4xl font-extrabold text-orange-500 mb-2">
                                <CountUp end={2000} duration={3} separator="," />+
                            </span>
                            <span className="text-gray-700 font-semibold text-center">Trees Planted for a Greener Future</span>
                        </div>
                    </div>
                </div>

                {/* Right Section - Donation Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-orange-50 p-4 md:p-8 shadow-md w-full max-w-lg"
                >
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder={nameFocused ? "" : "Your Name"}
                        className={`w-full mb-4 px-4 py-3 rounded bg-white placeholder-gray-300 text-black outline-none text-lg transition focus:ring focus:ring-orange-500 ${nameFocused ? "ring-2 ring-orange-500" : ""}`}
                        onFocus={() => setNameFocused(true)}
                        onBlur={(e) => setNameFocused(e.target.value === "" ? false : true)}
                    />
                    {/* Name error */}
                    {nameError && (
                        <div className="mb-3 text-red-600 text-sm">{nameError}</div>
                    )}
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder={emailFocused ? "" : "Your Email"}
                        className={`w-full mb-4 px-4 py-3 rounded bg-white placeholder-gray-300 text-black outline-none text-lg transition focus:ring focus:ring-orange-500 ${emailFocused ? "ring-2 ring-orange-500" : ""}`}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={(e) => setEmailFocused(e.target.value === "" ? false : true)}
                    />
                    {/* Email error */}
                    {emailError && (
                        <div className="mb-3 text-red-600 text-sm">{emailError}</div>
                    )}

                    {/* Manual Amount Field */}
                    <div className="relative mb-6">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 text-lg">₹</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={manualAmount}
                            onFocus={handleManualFocus}
                            onBlur={handleManualBlur}
                            onChange={handleManualChange}
                            placeholder={manualFocused ? "" : "Enter amount"}
                            className={`w-full pl-9 pr-4 py-3 rounded bg-white text-black placeholder-gray-300 outline-none text-lg transition focus:ring focus:ring-orange-500 ${manualFocused ? "ring-2 ring-orange-500" : ""}`}
                        />
                    </div>

                    {/* Amount Selection */}
                    <div className="grid grid-cols-4 gap-0 mb-4">
                        <button
                            onClick={() => handleAmountClick(500)}
                            className={`py-2 md:py-4 text-center text-md md:text-lg font-medium border rounded-tl-xl rounded-bl-xl 
                                ${selectedAmount === 500 ? "text-orange-500 border-orange-500 bg-white" : "text-black border-gray-200 bg-white"}
                            `}
                        >
                            ₹500
                        </button>
                        <button
                            onClick={() => handleAmountClick(1000)}
                            className={`py-2 md:py-4 text-center text-md md:text-lg font-medium border
                                ${selectedAmount === 1000 ? "text-orange-500 border-orange-500 bg-white" : "text-black border-gray-200 bg-white"}
                            `}
                        >
                            ₹1,000
                        </button>
                        <button
                            onClick={() => handleAmountClick(5000)}
                            className={`py-2 md:py-4 text-center text-md md:text-lg font-medium border
                                ${selectedAmount === 5000 ? "text-orange-500 border-orange-500 bg-white" : "text-black border-gray-200 bg-white"}
                            `}
                        >
                            ₹5,000
                        </button>
                        <button
                            onClick={() => handleAmountClick(10000)}
                            className={`py-2 md:py-4 text-center text-md md:text-lg font-medium border rounded-br-xl rounded-tr-xl
                                ${selectedAmount === 10000 ? "text-orange-500 border-orange-500 bg-white" : "text-black border-gray-200 bg-white"}
                            `}
                        >
                            ₹10,000
                        </button>
                    </div>

                    {/* Donate Button */}
                    <button className="bg-orange-500 hover:bg-orange-50 border-2 border-orange-500 text-white hover:text-orange-500 font-semibold py-4 w-full flex justify-center items-center gap-2 rounded"
                        onClick={handleDonate}
                        type="button"
                    >
                        Donate Now <FaArrowRight className="w-4 h-4" />
                    </button>
                    <div className="mt-3 text-orange-600 py-2 rounded text-sm font-semibold">
                        Save tax on your donation. Get 50% tax exemption under section 80G, SRO of the Income Tax Act-1961.
                    </div>
                </motion.div>
            </div>
            {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50">
                    <div className="bg-white w-11/12 max-w-xs md:max-w-md p-6 md:p-8 md:py-10 rounded shadow-lg text-center text-gray-900">
                        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                        <p>Your donation is successful. We appreciate your support!</p>
                        <button
                            className="mt-4 px-6 py-2 cursor-pointer bg-orange-500 text-white rounded"
                            onClick={() => setShowThankYou(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}