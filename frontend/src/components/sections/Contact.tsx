import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-blue-600">Touch</span>
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Have a project or just want to say hello? Feel free to drop me a message.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you within 24 hours.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiMail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                  <a href="mailto:pritam@example.com" className="text-gray-700 hover:text-primary-600 transition-colors">
                    pritammohapatra12345@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiPhone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-primary-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <FiMapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                  <p className="text-gray-700">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm relative"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center"
              >
                <FaCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for your message. I'll get back to you soon.</p>
                <motion.button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name {errors.name && <span className="text-red-500 text-xs"> - {errors.name}</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email {errors.email && <span className="text-red-500 text-xs"> - {errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message {errors.message && <span className="text-red-500 text-xs"> - {errors.message}</span>}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg text-black font-medium ${
                      isSubmitting ? "bg-primary-400" : "bg-blue-600 hover:bg-blue-700"
                    } transition-colors shadow-md hover:shadow-lg flex items-center justify-center`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;