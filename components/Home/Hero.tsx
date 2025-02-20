import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto pt-20 md:pt-24">
            <div className="flex flex-col justify-center gap-7 px-4 md:px-0">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Your Neighborhood Cars,
                    <span className="text-blue-600"> On Demand</span>
                </h1>
                
                <div className="space-y-6">
                    <p className="text-gray-600 text-lg">
                        Rent trusted cars from people in your community or share your car to earn extra income. It's the smarter way to think about car ownership.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                                <Image src="/icons/check.svg" alt="check" width={20} height={20} />
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">Rent a Car:</span> Access affordable vehicles in your neighborhood, from electric to luxury
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                                <Image src="/icons/money.svg" alt="money" width={20} height={20} />
                            </div>
                            <p className="text-gray-700">
                                <span className="font-semibold">Share Your Car:</span> Earn up to ₹30,000/month when your car would otherwise sit idle
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Rent a Car
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        List Your Car
                    </button>
                </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-[500px]">
                    <Image 
                        src="/hero-car.png" 
                        alt="Neighborhood car sharing" 
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;