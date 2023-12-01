import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="contactform__list mb-60">
        <form onSubmit={e => e.preventDefault()} id="contact-form" method="post">
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input name="name" type="text" placeholder="Ditt namn" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="email"
                  type="email"
                  placeholder="Epost"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="number"
                  type="text"
                  placeholder="Telefonnummer"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="website"
                  type="text"
                  placeholder="Hemsida"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  name="message"
                  placeholder="Skriv ditt meddelande...."
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button type="submit" className="tp-btn">
                  Skicka
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
