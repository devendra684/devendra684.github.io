import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validateForm() {
    const nextErrors = { name: "", email: "", message: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!emailRegex.test(email)) nextErrors.email = "Enter a valid email";
    if (!message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    if (!validateForm()) {
      setStatus("error");
      return;
    }
    setSubmitting(true);

    const formspreeId = process.env.REACT_APP_FORMSPREE_ID;
    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
        if (response.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      } catch (err) {
        setStatus("error");
      } finally {
        setSubmitting(false);
      }
    } else {
      setStatus("success");
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:devendra.singh248124@gmail.com?subject=${subject}&body=${body}`;
      setSubmitting(false);
    }
  }

  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-16 "
          : "bg-black pt-16 text-white "
      }
    > 
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          {/* Contact */}
          <p 
              className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline" >
                Contact
            </p>
      
        </h2>
        <div>
          <h4 className="mt-8 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-12">
          <div className="w-full md:pr-8">
            {status === "success" && (
              <div className="mb-4 p-3 rounded-md bg-green-100 text-green-800 border border-green-300">
                Your email client should open now with your message. If it didn't, please click the "Send me email directly" link below.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 p-3 rounded-md bg-red-100 text-red-800 border border-red-300">
                Please fix the errors below and try again.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="mailto:devendra.singh248124@gmail.com">
                    Send me email directly
                  </a>
                </div>
                <button type="submit" disabled={submitting} className="bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Phone</h1>
            <a id="contact-phone"
              href="tel:+919410619702"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 9410619702
            </a>
            <h1 className="text-3xl font-bold">Email</h1>
            <a id="contact-email"
              href="mailto:devendra.singh248124@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              devendra.singh248124@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <span
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Mathura, Uttar Pradesh
              <br />
              India
            </span>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a id="contact-github"
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img id="contact-linkedin" alt={`${el.name} icon`} src={el.url} />
                  <p className="text-md mt-2 hover:hidden">{el.name}</p>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-gray-400 text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Devendra Singh
      </div>
    </div>
  );
};

export default Contact;
