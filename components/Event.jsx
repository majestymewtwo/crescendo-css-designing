"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Event({ index, name, description, image, date }) {
  const router = useRouter();

  const transitionFX = { duration: 1.5, ease: "easeInOut" };
  const initialLeftFX = {
    opacity: "0%",
  };
  const initialRightlFX = {
    opacity: "0%",
  };
  const animateFX = {
    opacity: "100%",
  };

  const navigateToTickets = () => {
    router.push("/register");
  };
  return (
    <motion.div
      initial={index % 2 == 0 ? initialLeftFX : initialRightlFX}
      animate={animateFX}
      transition={transitionFX}
      className='w-[400px] rounded-md border-slate-500 hover:shadow-2xl transition-all ease-in-out duration-300 cursor-pointer bg-gradient-to-br from-black to-gray-950'>
      <Image
        width={500}
        height={300}
        src={image}
        className='rounded-t-md h-48'
      />
      <div className='p-8 space-y-4'>
        <h1 className='text-2xl font-bold tracking-widest'>{name}</h1>
        <p className='text-sm font-light'>{description}</p>
        <div className='flex items-center gap-1 font-black'>
          <Calendar />
          <p>{date}</p>
        </div>
        <button
          onClick={navigateToTickets}
          className='border border-slate-500 px-3 py-2 rounded-md hover:bg-slate-400 hover:text-black transition-all ease-in-out duration-200 w-full'>
          Get Tickets
        </button>
      </div>
    </motion.div>
  );
}
