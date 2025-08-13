// src/components/sections/Contact.tsx
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL; 

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await axios.post(`${API_BASE_URL}/contact`, formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
  id="contact"
  className="mt-10 py-16 px-4 bg-blacktext-white"
  initial={{ opacity: 0 , y: 20 }}
  animate={{ opacity: 1 , y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Get in <span className="text-primary">Touch</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Contact Info */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <FiMail className="text-primary text-2xl" />
          <span className="text-lg">pritammohapatra12345@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <FiPhone className="text-primary text-2xl" />
          <span className="text-lg">+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-4">
          <FiMapPin className="text-primary text-2xl" />
          <span className="text-lg">Bhubaneswar, Odisha, India</span>
        </div>
        
            {/* Social Icons */}
            <div className="flex items-center mt-20 gap-6">
              <a
                href="https://github.com/PritamMohapatra06"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <i className="ri-github-line text-5xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <i className="ri-linkedin-line text-5xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <i className="ri-instagram-line text-5xl"></i>
              </a>
            </div>
          </div>


      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-sm space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-700 text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-700 text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-700 text-white"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-3 bg-primary text-black rounded-lg hover:bg-primary transition-colors disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </div>
  </div>
</motion.section>

  );
}
