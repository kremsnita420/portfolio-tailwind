import NextImage from "next/image";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialIcons from "../layout/SocialIcons";
import CtaButton from "../layout/CtaButton";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          alert(
            "Something went wrong! Please try again or write to duranovic.safet@gmail.com"
          );
        }
      );
    e.target.reset();
  };

  const notify = () =>
    toast("🦄 Message sent successfully. You will hear from very soon. 🦄 ");

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center w-full h-full mb-20  glassmorph px-5 py-5">
        <div className="w-full lg:pr-10 flex flex-col mb-10 items-center">
          <h2 className="font-heading1 relative text-2xl md:text-3xl xl:text-4xl font-black mb-5">
            Send me a message.
          </h2>
          <p className="text-lg mb-10">
            If you wish to contact me just{" "}
            <span className="realistic-marker-highlight inline-block">
              {" "}
              fill the form
            </span>{" "}
            and I will reply very fast.
          </p>
          <div className="w-3/4  m-auto">
            <NextImage
              src="/images/mail.png"
              width={1000}
              height={1000}
              layout="responsive"
              alt="contact emoji"
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1613387275674-cb92af1c29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
          </div>
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-end w-full mt-10 mb-10 lg:mt-0"
        >
          <h2 className="font-heading1 circle-sketch-highlight relative text-2xl md:text-3xl xl:text-4xl font-black mb-5">
            Contact Form
          </h2>
          {/* NAME */}
          <div className="mb-6 w-full">
            <label
              htmlFor="name"
              className="text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Name
            </label>
            <input
              required
              type="text"
              name="user_name"
              id="name"
              className="
                    bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>
          {/* EMAIL */}
          <div className="mb-6 w-full">
            <label
              htmlFor="email"
              className="text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="user_email"
              id="email"
              className="
                    bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>

          {/* SUBJECT */}
          <div className="mb-6 w-full">
            <label
              htmlFor="subject"
              className="text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              required
              type="text"
              name="subject"
              id="subject"
              className="
                    bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            />
          </div>

          {/* TEXT */}
          <div className="mb-6 w-full">
            <label
              htmlFor="message"
              className="text-sm md:text-base lg:text-lg font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="6"
              className="
                bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm md:text-base lg:text-lg rounded-md 
                focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 p-2 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your message here..."
            />
          </div>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <button onClick={notify} type="submit">
            <CtaButton title="Send" />
          </button>
        </form>
      </div>
    </>
  );
}
