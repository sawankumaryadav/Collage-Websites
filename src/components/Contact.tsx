export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-8">
        Have questions? Reach out to our team — we’d love to hear from you!
      </p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows={4} className="p-3 border rounded-lg"></textarea>
        <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
