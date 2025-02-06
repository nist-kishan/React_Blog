import React from 'react'
import contactStyle from "../css/contact.module.css"

export default function Contact() {
    return (
        <>
            <div className={contactStyle.container}>
                <center><div className={contactStyle.icon}></div></center>
                <h1>Contact Us</h1>
                <form>
                    <label>Full Name</label>
                    <input type="text" placeholder="Your full name.." required />

                    <label>Email</label>
                    <input type="email" placeholder="Your email.." required />

                    <label>Message</label>
                    <textarea id="message" rows="4" placeholder="Your message.." required></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}
