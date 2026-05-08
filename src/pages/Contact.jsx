import { FaPaperPlane } from "react-icons/fa";
import { MdPerson, MdEmail, MdMessage } from "react-icons/md";

export const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
        // Handle form submission logic here
    };

    return (
        <section className="section-contact">
            <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '5.6rem' }}>
                <span className="section-eyebrow">📬 Get in Touch</span>
                <h2 className="container-title">Contact Us</h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.8rem',
                    maxWidth: '44rem',
                    margin: '1.6rem auto 0',
                    lineHeight: 1.6
                }}>
                    Have questions or feedback? We'd love to hear from you.
                </p>
            </div>

            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    {/* Name Field */}
                    <div style={{ position: 'relative' }}>
                        <MdPerson style={{
                            position: 'absolute', left: '1.6rem', top: '50%',
                            transform: 'translateY(-50%)', color: 'var(--accent-cyan)',
                            fontSize: '2rem', pointerEvents: 'none'
                        }} />
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            autoComplete="off"
                            name="name"
                            style={{ paddingLeft: '4.8rem', width: '100%' }}
                        />
                    </div>

                    {/* Email Field */}
                    <div style={{ position: 'relative' }}>
                        <MdEmail style={{
                            position: 'absolute', left: '1.6rem', top: '50%',
                            transform: 'translateY(-50%)', color: 'var(--accent-cyan)',
                            fontSize: '2rem', pointerEvents: 'none'
                        }} />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            autoComplete="off"
                            name="email"
                            style={{ paddingLeft: '4.8rem', width: '100%' }}
                        />
                    </div>

                    {/* Message Field */}
                    <div style={{ position: 'relative' }}>
                        <MdMessage style={{
                            position: 'absolute', left: '1.6rem', top: '1.8rem',
                            color: 'var(--accent-cyan)', fontSize: '2rem', pointerEvents: 'none'
                        }} />
                        <textarea
                            placeholder="Your Message"
                            required
                            autoComplete="off"
                            name="message"
                            rows={6}
                            style={{ paddingLeft: '4.8rem', width: '100%', minHeight: '16rem' }}
                        />
                    </div>

                    <button type="submit" style={{ width: '100%', justifyContent: 'center', fontSize: '1.6rem', padding: '1.4rem' }}>
                        <FaPaperPlane />
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </section>
    );
};
