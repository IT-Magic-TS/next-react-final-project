import { useState } from "react";
import styless from "./contact-form.module.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = e => {
    e.preventDefault();
    console.log(email, name, message);
  };

  return (
    <section className={styless.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={handleForm} className={styless.form}>
        <div className={styless.controls}>
          <div className={styless.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styless.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className={styless.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              type="text"
              id="message"
              onChange={e => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className={styless.actions}>
          <button type="submit">Send message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
