import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
const env = import.meta.env;


const Contact = () => {
  const [isSubmiting, setSubmiting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit =async (data) => {
    setSubmiting(true);
    await emailjs.send(
      `${env.VITE_EMAIL_SERVICE_ID}`,
      "template_grb6gbz",
      data,
      `${env.VITE_EMAIL_API}`
    ).then(
      (result) => {
        console.log(result);
        alert("Message sent successfully!");
        reset(); // reset form
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );
    setSubmiting(false);
  };

  return (
    <div
      id="contact"
      className="w-full pt-20 pb-20 px-4 bg-gray-900 flex flex-col items-center"
    >
      <span className="text-3xl sm:text-4xl poppins-bold text-white mb-2">
        Contact Me
      </span>
      <span className="text-gray-400 text-base sm:text-xl text-center max-w-xl mb-10">
        Feel free to reach out to me for any opportunities or work related
        queries!
      </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 bg-gray-900 shadow-md shadow-purple-500 rounded-2xl p-8 max-w-xl items-center justify-center flex flex-col w-full"
      >
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
            className="w-full p-3 rounded-xl bg-gray-900 border border-white text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>

        <div className=" w-full max-w-xl">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="w-full p-3 rounded-xl bg-gray-900 border border-white text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>

        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
            className="w-full p-3 rounded-xl bg-gray-900 border border-white  text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">Subject is required</span>
          )}
        </div>

        <div className="max-w-xl w-full">
          <textarea
            placeholder="Your Message"
            {...register("message", { required: true })}
            rows={4}
            className="w-full p-3 rounded-xl bg-gray-900 border border-white text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-40"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">Message is required</span>
          )}
        </div>

        <input
          type="submit"
          value="Send Message"
          disabled={isSubmiting}
          className="max-w-xl w-full font-medium bg-gradient-to-r from-pink-400 to-purple-600 text-white p-3 hover:bg-gradient-to-l rounded-lg transition-colors duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
