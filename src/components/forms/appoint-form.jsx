import React, { useState } from "react";

const AppointForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Course:", course);
    console.log("Date:", date);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setCourse("");
    setDate("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="text"
              placeholder="Förnamn & Efternamn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="email"
              placeholder="Din e-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="text"
              placeholder="Kurs du vill genomföra"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input
              type="text"
              placeholder="mm / dd / yyyy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea
              placeholder="Meddelande till oss"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="visit-btn mt-20">
            <button className="tp-btn" type="submit">
              Boka nu
            </button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className="visit-serial mt-45">
            <span>
              Behöver du en utbildning akut?{" "}
              <a href="tel:+46705888742">
                0705 - 88 87 42
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointForm;
