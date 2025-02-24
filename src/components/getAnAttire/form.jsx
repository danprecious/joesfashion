"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const emailSchema = z.object({
  clientName: z.string().min(3, { message: "Name is required" }),
  clientMessage: z.string().min(10, { message: "Message is required" }),
  clientEmail: z.string().email({message: "Email is required"})
}); 

export const GetAnAttireForm = () => {

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(emailSchema) });

  const sendMail = (data) => {
    const templateParams = {
      clientName: data.clientName,
      clientMessage: data.clientMessage,
      clientEmail: data.clientEmail
    };


    console.log(data);

    emailjs.send("service_bx8lzy6", "template_75aj9mt", templateParams, "rZ2RnV71cEvNT-Cj3").then(
      (res) => {
        console.log("Email sent successfully", res);
        setSuccess("We've received your message and will respond in your inbox shortly")
      },
      (error) => {
        console.error(error);
        setError("Message could not be sent, please try again")
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(sendMail)} className="py-7">
      <div className="">
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </div>
      <div className="my-5">
        <input
          name="clientName"
          id="clientName"
          placeholder="Enter your name..."
          type="text"
          className="py-2 px-3 w-full text-sm rounded-md"
          {...register("clientName")}
        />
        
      </div>
      <div className="my-5">
        <input
          name="clientEmail"
          id="clientEmail"
          placeholder="Please enter your email"
          type="email"
          className="py-2 px-3 w-full text-sm rounded-md"
          {...register("clientEmail")}
        />
      </div>

      <div className="my-5">
        <textarea
          name="clientMessage"
          id="clientMessage"
          placeholder="Tell us your style and how you want it delivered"
          className="py-2 px-3 w-full text-sm rounded-md"
          {...register("clientMessage")}
        />
      </div>

      <div className="flex justify-center my-5">
        <button
          type="submit"
          className="bg-black px-6 text-white py-3 rounded-md"
        >
          Send request
        </button>
      </div>
    </form>
  );
};
