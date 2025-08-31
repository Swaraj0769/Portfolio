import React, { useState } from "react";
// import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_t4zpgdl", // Replace with your EmailJS Service ID
        "template_318ww2l", // Replace with your Template ID
        formData,
        "pxoQ5iS1wKb1M2RC0" // Replace with your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I’d love to hear from you! Whether it’s a project idea or a quick
          hello, drop me a message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
          <form onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm text-center mt-2 text-gray-700 dark:text-gray-300">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Contact Information
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Feel free to contact me directly via email or social media.
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              📧 <strong>Email:</strong> your.email@example.com
            </li>
            <li>
              📱 <strong>Phone:</strong> +91 9876543210
            </li>
            <li>
              🌐 <strong>Location:</strong> India
            </li>
          </ul>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              🌟 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
