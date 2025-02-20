import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 data-testid="contact-title">Contact Us</h2>
      <p>
        If you have any questions or comments, please don't hesitate to contact
        us.
      </p>
      <p>Email: support@kiranashop.com</p>
      <p data-testid="phoneno">Phone: +123 456 7890</p>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
