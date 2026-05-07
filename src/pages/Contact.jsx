export const Contact = () => {
    const handleFormSubmit = (formData) => {
        console.log(formData.entries());
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
        // Handle form submission logic here
    };

    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text" placeholder="Your Name" required autoComplete="off" name="name" className="form-control" />
                <input type="email" placeholder="Your Email" required autoComplete="off" name="email" className="form-control" />
                <textarea placeholder="Your Message" required autoComplete="off" name="message" className="form-control"></textarea>

                <button type="submit" value="send">
                    Send
                </button>
            </form>
        </div>
    </section>
}