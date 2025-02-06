import React from 'react'

export default function privacy() {
  return (
    <>
        <header>
        <h1>Privacy Policy</h1>
    </header>
    <main>
        <section>
            <h2>Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us...</p>
        </section>
        <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect in the following ways...</p>
        </section>
        <section>
            <h2>Information Sharing</h2>
            <p>We may share your information with third parties...</p>
        </section>
        <section>
            <h2>Your Choices</h2>
            <p>You can manage your information and privacy preferences...</p>
        </section>
        <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time...</p>
        </section>
        <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us...</p>
            <div className="close">
                <button type="button" id="closebtn">close</button>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
    </footer>
    </>
  )
}
