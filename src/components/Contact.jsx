import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // State to manage sending status
  const [message, setMessage] = useState(null); // State to manage feedback message

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true); // Set sending status to true
    setMessage(null); // Clear any previous messages

    emailjs
      .sendForm(
        'service_nwft8ci', //Service ID
        'template_7wtoevd', //Template ID
        form.current,
        'Ll7D219ac6PdEGGgk' //Public Key
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setMessage({
            type: 'success',
            text: 'Message sent successfully! Thank you for reaching out.',
          });
          form.current.reset(); // Reset form on success
        },
        (error) => {
          console.error('Failed to send email:', error.text || error);
          setMessage({
            type: 'error',
            text: 'Failed to send message. Please try again later.',
          });
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending status
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className=" pb-8 md:py-16 bg-[#190525] text-white"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-lg md:text-2xl text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Have a project in mind or just want to say hello? Drop me a line!
        </p>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col space-y-8"
          >
            <div className="bg-gradient-to-tr from-transparent via-[#31163F] to-transparent p-6 rounded-lg shadow-lg border border-gray-700 flex items-center space-x-4 min-h-[150px]">
              <span className="text-4xl text-blue-400">
                <FaMailBulk className="text-purple-500" />
              </span>
              {/* Email Icon */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Email Me
                </h3>
                <p className="text-gray-400">awal3web@gmail.com</p>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-transparent via-[#31163F] to-transparent p-6 rounded-lg shadow-lg border border-gray-700 flex items-center space-x-4 min-h-[150px]">
              <span className="text-4xl text-blue-400">
                <FaPhone className="rotate-90 text-purple-500" />
              </span>
              {/* Phone Icon */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200">Call Me</h3>
                <p className="text-gray-400">+880 1812959878</p>
              </div>
            </div>
            <div className="bg-gradient-to-tr from-transparent via-[#31163F] to-transparent p-6 rounded-lg shadow-lg border border-gray-700 flex items-center space-x-4 min-h-[150px]">
              <span className="text-4xl ">
                <FaLocationArrow className="text-purple-500 " />
              </span>{' '}
              {/* Location Icon */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Location
                </h3>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="md:w-1/2 bg-gradient-to-tr from-transparent via-[#31163F] to-transparent p-8 rounded-lg shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name" // Important: matches EmailJS template variable
                  required
                  className="w-full p-3 rounded-md bg-slate-300 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="from_email"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email" // Important: matches EmailJS template variable
                  required
                  className="w-full p-3 rounded-md bg-slate-300 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Important: matches EmailJS template variable
                  rows="3"
                  required
                  className="w-full p-3 rounded-md bg-slate-300 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-purple-400 focus:ring-opacity-50 text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending} // Disable button while sending
                className="w-full  bg-purple-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}{' '}
                {/* Show sending state */}
              </button>
              {/* Display success/error message */}
              {message && (
                <p
                  className={`mt-4 text-center text-lg ${
                    message.type === 'success'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="text-center flex items-center justify-center gap-2">
          <div className="w-24 h-[2px] bg-gray-500"></div>
          <h4 className="text-2xl  font-semibold  border-b-purple-950   ">
            follow <span className="text-purple-400">me</span> on
          </h4>
          <div className="w-24 h-[2px] bg-gray-500"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 text-gray-400 mt-4"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100077524644610"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-purple-500 transition-colors   w-10 h-10 rounded-full   flex justify-center items-center hover:bg-purple-900 "
          >
            <FaFacebook className="text-white text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-purple-500 transition-colors duration-300 w-10 h-10 rounded-full   flex justify-center items-center hover:bg-purple-900 "
          >
            <FaLinkedin className="text-white text-lg" />
          </a>
          <a
            href="https://github.com/ma-awal"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-purple-500 transition-colors duration-300  w-10 h-10 rounded-full   flex justify-center items-center hover:bg-purple-900 "
          >
            <FaGithub className="text-white text-lg" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
