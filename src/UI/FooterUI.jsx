import React from 'react'
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerUIStyle from "../css/footerUI.module.css"

export default function FooterUI() {
    return (
        <>
            <footer className={footerUIStyle.footerUI}>
                <p>&copy; 2024 My Blog | <a href="/privacy">Privacy Policy</a> | <a href="/rules">Terms of Service</a></p>
                <p>Contact us: <a href="mailto:kishanrajrby2@gmail.com">kishanrajrby2@gmail.com</a></p>
                <p>Follow us on:</p>
                <div className={footerUIStyle.socialIcons}>
                    <a href="https://www.facebook.com/kishanrajrby2" target="_blank" aria-label="Facebook"><FaFacebook/></a>
                    <a href="https://x.com/kishanrajrby2" target="_blank" aria-label="Twitter"><FaXTwitter/></a>
                    <a href="https://www.instagram.com/kishanrby2/" target="_blank" aria-label="Instagram"><FaInstagram/></a>
                </div>
            </footer>
        </>
    )
}
