import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { addDoc,collection } from "firebase/firestore";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThanks,setShowThanks] = useState(false)
  
  let navigate = useNavigate();

  const contactCollection = collection(db,"contactus");

  const addfeedback = async () => {
    try {
      // await addDoc(contactCollection, {
      //   name,
      //   email,
      //   message,
      // });
      setShowThanks(true); // show thanks div on successful feedback submission
      setTimeout(() => {
        setShowThanks(false);
        let path = "/";
        navigate(path);
      }, 5000); // redirect to home page after 2 seconds
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen py-4 bg-contact-pattern bg-no-repeat bg-cover">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-xl font-bold text-gray-700 mb-6">Send Your Feedback</p>
      <form onSubmit={addfeedback} className="w-1/2">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-lg mb-2 text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-gray-400 border-2 rounded-lg py-2 px-3 text-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-lg mb-2 text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-gray-400 border-2 rounded-lg py-2 px-3 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-lg mb-2 text-gray-900">
            Message/Feedback
          </label>
          <textarea
            id="message"
            className="border-gray-400 border-2 rounded-lg py-2 px-3 text-lg resize-none h-40"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors duration-6000"
        >
          Submit
        </button>
      </form>
      {showThanks && 
        <div className="flex items-center justify-center w-fit mx-16">
          <div className="z-50 absolute top-24 bg-green-300 p-8 rounded-lg shadow-lg">
            <p className="text-xl text-gray-800 mb-4">Thanks for your feedback!</p>
            <p className="text-xl text-gray-800 mb-4">Your Page will Automatically redirect</p>
          </div>
        </div>
      }
    </div>
  );
};

export default ContactUs;
