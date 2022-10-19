/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessMessage from "./SuccessMessage";

export default function ContactUs() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    event.target.name == "fullName"
      ? setFullName(event.target.value)
      : event.target.name == "email"
      ? setEmail(event.target.value)
      : event.target.name == "message"
      ? setMessage(event.target.value)
      : event.target.name == "phone"
      ? setPhone(event.target.value)
      : console.log("error");
  };

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
          // clearForm();
          setFullName("");
          setMessage("");
          setEmail("");
          setPhone("");
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative bg-white border-b-2 border-t-2 border-apexB" id="ContactUs">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-4 py-16 bg-apexB rounded-r-3xl  sm:px-6 lg:col-span-2 lg:px-8  xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow sm:text-3xl">{`Become a Provider Today`}</h2>
            <p className="mt-3 text-lg leading-6 text-gray-200">
              Submit the contact form or use one of the below options to get in
              touch with an Apex Longevity representative today
            </p>
            <dl className="mt-8 text-base text-gray-200">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>36901 American Way, Suite 7</p>
                  <p>Avon, OH 44011</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-200"
                    aria-hidden="true"
                  />
                  <a href="tel:+18777122739"><span className="ml-3 hover:text-white hover:underline">+1 (877) 712-2739</span></a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">support@apexlongevity.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3  lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:border-apexB focus:ring-apexB"
                  placeholder="Message"
                  // defaultValue={''}
                  value={message}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  value="Send"
                  className="inline-flex justify-center px-6 py-3 text-base font-medium text-white duration-300 border border-transparent rounded-md shadow-sm bg-apexB hover:bg-apexG focus:outline-none focus:ring-2 focus:ring-apexB focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
            {showSuccessMessage && <SuccessMessage />}
          </div>
        </div>
      </div>
    </div>
  );
}