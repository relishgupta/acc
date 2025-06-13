"use client"

import PageHeading from "@/components/PageHeading";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function DonationSection() {
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
                        type="text"
                        placeholder={nameFocused ? "" : "Your Name"}
                        className={`w-full mb-4 px-4 py-3 rounded bg-white placeholder-gray-300 text-black outline-none text-lg transition focus:ring focus:ring-orange-500 ${nameFocused ? "ring-2 ring-orange-500" : ""}`}
                        onFocus={() => setNameFocused(true)}
                        onBlur={(e) => setNameFocused(e.target.value === "" ? false : true)}
                    />
                    <input
                        type="email"
                        placeholder={emailFocused ? "" : "Your Email"}
                        className={`w-full mb-4 px-4 py-3 rounded bg-white placeholder-gray-300 text-black outline-none text-lg transition focus:ring focus:ring-orange-500 ${emailFocused ? "ring-2 ring-orange-500" : ""}`}
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
                    <button className="bg-orange-500 hover:bg-orange-50 border-2 border-orange-500 text-white hover:text-orange-500 font-semibold py-4 w-full flex justify-center items-center gap-2 rounded">
                        Donate Now <FaArrowRight className="w-4 h-4" />
                    </button>
                    <div className="mt-3 text-orange-600 py-2 rounded text-sm font-semibold">
                        Save tax on your donation. Get 50% tax exemption under section 80G, SRO of the Income Tax Act-1961.
                    </div>
                </motion.div>
            </div>
        </>
    );
}