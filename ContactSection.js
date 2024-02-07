import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact us</h1>
      <h3 className="title">we love conversations, let's talk.</h3>

      <div className="row">
        <div className="image">
        <img src="/images/Email campaign-cuate.png" alt="Email Campaign Illustration" />

        </div>

        <div className="form-container">
          <form action="">
            <input type="text" placeholder="full name" />
            <input type="email" placeholder="enter your email" />
            <input type="number" placeholder="phone" />
            <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
            <input type="submit" value="message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
