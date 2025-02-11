"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-12 text-xl font-medium leading-relaxed font-in'>
            Hello! my name is <input type="text" placeholder="your name" {...register("name", { required: true })} className='border-0 outline-none p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
            and I want to discuss a potential project.You can email me at<input type="text" placeholder="your@email" {...register("email", { required: true })} className='border-0 outline-none p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
            or reach out me on<input type="tel" placeholder="mobile number" {...register("your mobile number", { required: true })} className='border-0 outline-none p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
            Here are some details about my project:<br /><textarea placeholder='My project is about...'
                {...register("project details", { required: true })}
                rows={3}
                className='w-full border-0 outline-none p-0 mx-2 focus:ring-0 
             placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
            <input type="submit" value="send request" className='mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark
            rounded cursor-pointer' />
        </form>
    );
}