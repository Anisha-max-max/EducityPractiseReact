import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg.png'
import mail_icon from '../../assets/mail icon.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'
import white_arrow from '../../assets/white next arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",
         "cdd952c0-512d-47f0-a8fc-b3b4b503ba6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      


      method: "POST",
      body: formData
    }).then(response => response.json());

    if (response.success) {
      console.log("Sucess",response);
      setResult(response.message);
      event.target.reset()
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };
  return (
    <div className='contact'> 
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>Feel free to reach out through contact form or find our contact
            information below. Your Feedback. questions, and sugggestions are important 
            to us as we strive to provide exceptional service to our
            university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt=""/>Contact@rkcnl.com </li>
            <li><img src={phone_icon} alt=""/>0116615144 </li>
            <li><img src={location_icon} alt=""/>Kathmandu </li>
        </ul>

      </div>
   
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name'
            required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number'
            required/>
            <label>Write your message here</label>
            <textarea name="message" id=""  row="6" aria-placeholder='Enter your message'
            required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
        </form>
        <span>{result}</span>
    </div>
        
      </div>
  )
}

export default Contact
