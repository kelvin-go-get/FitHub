import React,{useRef} from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jqofro8', 'template_cdz2h08', form.current, 'cEw1XdPaQH7MFQpvX')
          .then((result) => {
            console.log(result.text);
            // Display an alert on successful email submission
            alert("You are now a fit hub member");

            form.current.reset();
          })
          .catch((error) => {
            console.log(error.text);
          });
      };
    

  return (
    <div className="Join" id="join-us">
      <div className="left-j">

        <hr/>
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={(sendEmail)}>
            <input type="email" name="user_email" placeholder="Enter Your email address" />
            <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
