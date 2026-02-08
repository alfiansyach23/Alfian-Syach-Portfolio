import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const socialLinks = [
  {
    icon: BiLogoGmail,
    href: "mailto:alfiansyach23@gmail.com",
    label: "Gmail",
  },
  {
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/alfian-syach-3070221b4/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagramSquare,
    href: "https://instagram.com/alfian1206/",
    label: "Instagram",
  },
  {
    icon: BsGithub,
    href: "https://github.com/alfiansyach23/",
    label: "GitHub",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error);
      setStatus("error");
    })
    .finally(() => setLoading(false));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        {/* FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className='w-full space-y-3 lg:space-y-5'
          >
            <input
              name="user_name"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your name*'
              required
            />

            <input
              name="user_email"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="email"
              placeholder='Email*'
              required
            />

            <input
              name="subject"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Subject*'
              required
            />

            <textarea
              name="message"
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full'
              placeholder='Body Massage*'
              required
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                disabled={loading}
                className='bg-black disabled:opacity-50 justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>discuss</span> for</h2>
            <h2>a New Opportunity</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
            I’m seeking new opportunities where I can leverage data to drive insights
            and informed decision-making. Let’s connect and explore potential collaborations.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a whileHover={{ x: 5 }} className='flex items-center gap-2 group' href="mailto:alfiansyach23@gmail.com">
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              alfiansyach23@gmail.com
            </motion.a>

            <motion.a whileHover={{ x: 5 }} className='flex items-center gap-2 group' href="tel:6287730710488">
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              6287730710488
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

}
