import react from 'react';
import emailjs from 'emailjs-com';
import '../Stylesheets/Contact.css';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_sr3flxj', 'template_jzm137e', e.target, 'KHj5bsjKSCp8iIVGM')
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Enter your message..."required></textarea>
                </div>
                <button type="submit" value="Send">Send Message</button>
                

            </form>
        </section>
    )
}

export default Contact;