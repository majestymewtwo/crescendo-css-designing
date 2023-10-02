"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const { toast } = useToast();
  const [tickets, setTickets] = useState(null);

  const increaseTickets = () => {
    setTickets(
      (prev) => prev ? prev+1 : 1
    );
  }

  const decreaseTickets = () => {
    setTickets(
      (prev) => prev>0 ? prev-1 : null
    )
  }

  const createToast = () => {
    toast({
      title: "Event Registration",
      description: "Successfully Registered for the event",
    });
  };

  return (
    <section className='p-24 space-y-10'>
      <div className='w-1/3 space-y-3 mx-auto'>
        <h2 className='text-4xl font-black'>Please fill in your details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam
          facere perspiciatis dolorum, adipisci veniam itaque? Doloremque
          dolorum molestias laborum.
        </p>
      </div>
      <div className='flex flex-col items-center text-left space-y-5 text-slate-500'>
        <input
          type='text'
          placeholder='Name'
          className='border border-slate-400 px-4 py-2 bg-inherit focus:outline-none rounded-md w-1/3'
        />
        <input
          type='text'
          placeholder='Email'
          className='border border-slate-400 px-4 py-2 bg-inherit focus:outline-none rounded-md w-1/3'
        />
        <input
          type='text'
          placeholder='Phone'
          className='border border-slate-400 px-4 py-2 bg-inherit focus:outline-none rounded-md w-1/3'
        />
        <div className='relative w-1/3'>
          <input
            type='number'
            onChange={(e) => setTickets(e.target.value)}
            placeholder='Tickets'
            value={tickets}
            className='border border-slate-400 px-4 py-2 bg-inherit focus:outline-none rounded-md w-full'
          />
        </div>

        <Select>
          <SelectTrigger>Event Name</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='crescendo'>Crescendo</SelectItem>
              <SelectItem value='musendro'>Musendro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>Price</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='premium'>Premium - 25,000 Rs</SelectItem>
              <SelectItem value='diamond'>Diamond - 12,000 Rs</SelectItem>
              <SelectItem value='platinum'>Platinum - 5,000 Rs</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='flex space-x-4 justify-between'>
          <Image
            height={20}
            width={70}
            src='/gpay.png'
            title='Google Pay'
            className='cursor-pointer'
          />
          <Image
            height={20}
            width={70}
            src='/upi.png'
            title='Other UPI'
            className='cursor-pointer'
          />
          <Image
            height={20}
            width={70}
            src='/paytm.png'
            title='PayTM'
            className='cursor-pointer'
          />
        </div>
        <button
          onClick={createToast}
          className='border border-slate-400 px-3 py-2 rounded-md hover:bg-slate-400 hover:text-black transition-all ease-in-out duration-200 w-1/3 text-slate-400'>
          Register Now
        </button>
        <Toaster />
      </div>
    </section>
  );
}
