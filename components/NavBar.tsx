import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
    return (
        <div className="hidden md:flex justify-between items-center p-2 px-5 shadow-sm border-b-[1px] border-gray-200">
            <Image src='/logo.png' alt='logo' width={120} height={50} />
        
            <div className="flex gap-4">
                <h2 className="hover:text-blue-500 cursor-pointer px-3 font-bold p-1 rounded-md">Home</h2>
                <h2 className="hover:text-blue-500 cursor-pointer px-3 font-bold p-1 rounded-md">History</h2>
                <h2 className="hover:text-blue-500 cursor-pointer px-3 font-bold p-1 rounded-md">Contact</h2>
            </div>
            <UserButton />
        </div>
    )
}

export default NavBar;