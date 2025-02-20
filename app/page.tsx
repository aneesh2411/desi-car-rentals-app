"use client"
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}
