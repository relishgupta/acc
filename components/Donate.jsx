"use client"

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Donate() {
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const [manualAmount, setManualAmount] = useState("");
    const [manualFocused, setManualFocused] = useState(false);

    // New state for input focus
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);

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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-28 py-16 md:py-28 max-w-9xl mx-auto">
                {/* Left Section */}
                <div className="max-w-2xl">
                    <button className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full mb-6">
                        Donate Now
                    </button>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Your Support Makes a Difference
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Every contribution helps us empower communities and bring positive change. Your donation enables us to organize cultural, educational, and social initiatives for those in need. Join us in making a meaningful impact—no amount is too small!
                    </p>
                </div>

                {/* Right Section - Donation Box */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white p-4 md:p-8 shadow-md w-full max-w-lg"
                >
                    <input
                        type="text"
                        placeholder={nameFocused ? "" : "Your Name"}
                        className={`w-full mb-4 px-4 py-3 rounded bg-gray-100 text-black placeholder-gray-400 outline-none text-lg transition focus:ring focus:ring-orange-500 ${nameFocused ? "ring-2 ring-orange-500" : ""}`}
                        onFocus={() => setNameFocused(true)}
                        onBlur={(e) => setNameFocused(e.target.value === "" ? false : true)}
                    />
                    <input
                        type="email"
                        placeholder={emailFocused ? "" : "Your Email"}
                        className={`w-full mb-4 px-4 py-3 rounded text-black bg-gray-100 placeholder-gray-400 outline-none text-lg transition focus:ring focus:ring-orange-500 ${emailFocused ? "ring-2 ring-orange-500" : ""}`}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={(e) => setEmailFocused(e.target.value === "" ? false : true)}
                    />

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
                            className={`w-full pl-9 pr-4 py-3 text-black rounded bg-gray-100 placeholder-gray-400 outline-none text-lg transition focus:ring focus:ring-orange-500 ${manualFocused ? "ring-2 ring-orange-500" : ""}`}
                        />
                    </div>

                    {/* Amount Selection */}
                    <div className="grid grid-cols-4 gap-0 mb-4">
                        <button
                            onClick={() => handleAmountClick(500)}
                            className={`py-2 md:py-4 text-center cursor-pointer text-md md:text-lg font-medium border rounded-tl-xl rounded-bl-xl 
                                ${selectedAmount === 500 ? "text-orange-500 border-orange-500 bg-gray-100" : "text-black border-gray-200 bg-gray-100"}
                            `}
                        >
                            ₹500
                        </button>
                        <button
                            onClick={() => handleAmountClick(1000)}
                            className={`py-2 md:py-4 text-center cursor-pointer text-md md:text-lg font-medium border
                                ${selectedAmount === 1000 ? "text-orange-500 border-orange-500 bg-gray-100" : "text-black border-gray-200 bg-gray-100"}
                            `}
                        >
                            ₹1,000
                        </button>
                        <button
                            onClick={() => handleAmountClick(5000)}
                            className={`py-2 md:py-4 text-center cursor-pointer text-md md:text-lg font-medium border
                                ${selectedAmount === 5000 ? "text-orange-500 border-orange-500 bg-gray-100" : "text-black border-gray-200 bg-gray-100"}
                            `}
                        >
                            ₹5,000
                        </button>
                        <button
                            onClick={() => handleAmountClick(10000)}
                            className={`py-2 md:py-4 text-center cursor-pointer text-md md:text-lg font-medium border rounded-br-xl rounded-tr-xl
                                ${selectedAmount === 10000 ? "text-orange-500 border-orange-500 bg-gray-100" : "text-black border-gray-200 bg-gray-100"}
                            `}
                        >
                            ₹10,000
                        </button>
                    </div>

                    {/* Donate Button */}
                    <button className="bg-orange-500 cursor-pointer hover:bg-white border-2 border-orange-500 text-white hover:text-orange-500 font-semibold py-3 md:py-4 w-full flex justify-center items-center gap-2 rounded">
                        Donate Now <FaArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </>
    );
}