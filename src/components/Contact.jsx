import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import seal1 from "../DUNS-Registered-Seal.png";
import seal2 from "../apple-touch-icon.png";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-black py-16">
      <section id="contact" className="px-6 lg:px-16">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl font-bold tracking-wide mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-10"
          >
            Have a question or need assistance? Our team is here to help. Fill
            out the form below, and we'll get back to you as soon as possible.
          </motion.p>

          <div className="flex flex-col lg:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-10 w-full lg:w-1/3 flex flex-col justify-between"
            >
              <div className="flex justify-center gap-4 mb-6">
                <img src={seal1} alt="Logo 1" className="w-16 h-16" />
                <img src={seal2} alt="Logo 2" className="w-16 h-16" />
              </div>

              <div className="text-white space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-sm text-gray-400">
                    8 The Green, Ste A, Dover, DE 19901. USA
                    <br />
                    #64-7, Vamanjoor, Mangalore, 575028. India
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-sm text-gray-400">
                    USA: (772) 842 3337 <br />
                    CAN: (437) 887 3338 <br />
                    IND: (734) 934 3336
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-sm text-gray-400">info@cycity.net</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Website</h3>
                  <p className="text-sm text-gray-400">
                    <a href="https://cycity.net/" className="underline">
                      cycity.net
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="p-10 w-full lg:w-2/3 bg-gray-950"
            >
              <h3 className="text-3xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    {...register("name", { required: true })}
                    className="py-3 px-4 w-full border border-gray-700 bg-black text-white rounded-md focus:ring-2 focus:ring-gray-500"
                    placeholder="Name"
                  />
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="py-3 px-4 w-full border border-gray-700 bg-black text-white rounded-md focus:ring-2 focus:ring-gray-500"
                    placeholder="Email"
                  />
                </div>
                <input
                  {...register("subject")}
                  className="py-3 px-4 w-full border border-gray-700 bg-black text-white rounded-md focus:ring-2 focus:ring-gray-500"
                  placeholder="Subject"
                />
                <textarea
                  {...register("message", { required: true })}
                  className="w-full py-3 px-4 border border-gray-700 bg-black text-white rounded-md focus:ring-2 focus:ring-gray-500 resize-none"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-white text-black font-semibold rounded-md transition-all hover:bg-gray-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
