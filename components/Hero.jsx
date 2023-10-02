"use client";
import Lottie from "lottie-react";
import music from ".././public/music-lottie.json";
import { motion } from "framer-motion";

export default function Hero() {
  const transitionFX = { duration: 1.4, ease: "easeInOut" };
  const initialLeftFX = {
    x: "100vw",
  };
  const initialRightlFX = {
    x: "-100vw",
  };
  const animateFX = {
    x: "0",
  };
  return (
    <div className='flex items-center h-[400px]'>
      <motion.div
        initial={initialLeftFX}
        animate={animateFX}
        transition={transitionFX}
        className='relative w-1/2 h-full'>
        <Lottie
          loop={true}
          animationData={music}
          className='w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </motion.div>
      <motion.div
        initial={initialRightlFX}
        animate={animateFX}
        transition={transitionFX}
        className='space-y-3 w-1/2'>
        <h2 className='font-bold text-6xl'>Welcome to fiesta</h2>
        <p className='font-light'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          aspernatur quibusdam accusantium adipisci beatae debitis maxime
          quaerat iure deserunt at ad dicta a optio pariatur enim voluptate quo
          iste sunt numquam, hic ullam assumenda! Aliquam itaque laboriosam aut
          earum sunt ea possimus delectus unde laborum?
        </p>
      </motion.div>
    </div>
  );
}
