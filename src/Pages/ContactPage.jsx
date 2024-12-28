const ContactPage = () => {
  return (
    <>
      <section id="contact">
        <h2>Get in touch</h2>
        <div className="contact-container">
          <div className="form-div">
            <h5>Leave a message:</h5>
            <form
              action="https://formsubmit.co/d7fcbe04758434a6608acbab04f926d1"
              method="POST"
            >
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    minLength="2"
                    required
                  />
                  <label htmlFor="name">
                    {" "}
                    <i className="fas fa-user"></i> Your Name
                  </label>
                </div>
                <div className="input-group">
                  <input type="text" id="email" name="email" required />
                  <label htmlFor="email">
                    {" "}
                    <i className="fas fa-envelope"></i> Email id
                  </label>
                </div>
              </div>
              <div className="input-group">
                <input type="text" id="head" name="name" required />
                <label htmlFor="name">
                  <i className="fas fa-envelope-open-text"></i> Message Subject
                </label>
              </div>
              <input
                type="hidden"
                name="_subject"
                value="New submission From Portfolio!"
              />
              <div className="input-group">
                <textarea
                  id="message"
                  rows="8"
                  name="message"
                  required
                ></textarea>
                <label htmlFor="message">
                  {" "}
                  <i className="fas fa-comments"></i> Your Message
                </label>
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://samuelajala.vercel.app/response"
              />
              <button id="submit-btn" type="submit">
                SEND <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
