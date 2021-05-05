import React from "react"
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


import "../Styles/Style.css"
import NavBar from "./NavBar"

const Message = () => {


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_r74qxsh', 'template_hcbibta', e.target, 'user_RvQ9bHbP5Sl41i211QJPI')
          .then((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 2000
              })
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
      }

    return(
        <>
        <NavBar />
        <div className="message-container" onSubmit={sendEmail}>
            <div className="message-card">
                <h1>Get In Touch</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required/><br />

                    <label htmlFor="email">E-mail</label>
                    <input type="e-mail" name="email" id="email" required/> <br />

                    <label htmlFor="message">Your message</label>
                    <textarea name="message" id="message" rows="5" required/> <br />

                    <input type="submit" value="Send" className="btn-primary btn-submit" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Message