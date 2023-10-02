"use client";
import Lottie from "lottie-react";
import contact from "../../public/contact-us.json";
import { Facebook, Instagram, Linkedin, Twitch, Twitter, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <div className='p-24 flex items-center'>
      <Lottie animationData={contact} className='w-1/2' />
      <div className='w-1/2 space-y-4'>
        <h1 className='text-4xl font-black'>24/7 Support</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          nostrum nisi aliquam. Cupiditate voluptatum veritatis hic aspernatur
          quisquam explicabo quo a tempore autem. Ea, facilis dolores aliquam,
          iusto, voluptatum dolorem consequatur atque illo amet consectetur
          nulla cumque nostrum asperiores qui!
        </p>
        <div className="flex space-x-10">
            <Youtube className="hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer w-8 h-8" />
            <Linkedin className="hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer w-8 h-8" />
            <Instagram className="hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer w-8 h-8" />
            <Facebook className="hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer w-8 h-8" />
            <Twitch className="hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer w-8 h-8" />
            <Twitter className="hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
