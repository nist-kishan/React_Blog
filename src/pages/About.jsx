import React from 'react'
import aboutStyle from "../css/about.module.css"

export default function About() {
  return (
    <>
    <div className={aboutStyle.container}>
        <h1>About Us</h1>
        <div className={aboutStyle.image}>
            <center><div className={aboutStyle.photo}></div></center>
            <p className={aboutStyle.name}>Owner : Kishan Raj</p>
            <p>Qualification : Intermediated Passout From Hyderbad,Telangana India</p>
        </div>
        <div className={aboutStyle.content}>
            <p>Welcome to MyBlog! We are passionate about providing you with the best content on a variety of topics. Whether you're interested in technology, travel, lifestyle, or food, we've got something for everyone.</p>
            <p>Our team is dedicated to bringing you well-researched and engaging articles to keep you informed and entertained. We believe in the power of sharing knowledge and experiences, and we aim to build a community of like-minded individuals who are eager to learn and grow.</p>
            <p>Thank you for visiting MyBlog. We hope you enjoy your time here and find our content valuable. If you have any questions or feedback, please feel free to reach out to us via our contact page.</p>
        </div>
    </div>
    </>
  )
}
