import React, { useRef } from 'react';
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
    const form = useRef();
    const notify = () => toast.success(" Successfully Send");

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_7gtqeco",
          "template_1rg8qda",
          form.current,
          "xvC4WUokit8berPL2"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Let's Connect</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">                
                <div className="contact__info">
                    <div className="contact__card">
                        <div
          className="mx-auto lg:mx-24 my-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="contact_input">
            <FiPhone className="border  border-info rounded-full p-3 h-11 w-11"></FiPhone>
            +8801642990394
          </p>
          <p className="email">
            <FiMail className=""></FiMail> <a
              className="underline email"
              href="mailto:samantaislam355@gmail.com"
            >
              samantaislam355@gmail.com
            </a>
          </p>
          <p className="contact_input field_input">
            <a
              href="https://www.linkedin.com/in/samanta-islam-0ba236280/"
              data-tip="LinedIn"
              className='email'
            >
              <FiLinkedin className="border  text-black rounded-lg "></FiLinkedin>
            </a>
            <a href="https://github.com/samanta335" className='field email' data-tip="Github">
              <FiGithub className="border text-black rounded-lg p-2 h-9 w-9"></FiGithub>
            </a>
            <a
              href="https://www.facebook.com/Samanta.Islam.27"
              data-tip="Facebook"
              className='email'
            >
              <FiFacebook className="border text-black rounded-lg p-2 h-9 w-9"></FiFacebook>
            </a>
          </p>
          </div>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text"   name="from_name" className="contact__form-input" placeholder="Type your name" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="from_email" className="contact__form-input" placeholder="Type your email" />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Subject</label>
                        <input type="text" name="subject" className="contact__form-input" placeholder="Type Subject" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="project" cols="10" rows="10" className="contact__form-input" placeholder="Message"></textarea>
                    </div>

                    <button  onClick={notify} href="#contact" className="button button--flex cv_icon">
                        Send Message
                        <svg
                            class="button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
        <ToastContainer/>
    </section>
  );
}

export default Contact;