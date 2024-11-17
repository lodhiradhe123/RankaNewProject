import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container m-auto flex justify-center  items-center px-4">
          <h1 className="text-2xl font-bold">Ranka Tent Suppliers</h1>
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Your Trusted Partner for Event Solutions</h2>
            <p className="text-lg md:text-2xl mb-6">Premium tents and event supplies for every occasion</p>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            At Ranka Tent Suppliers, we specialize in providing high-quality tents and event supplies to make your events
            memorable. With years of experience and a commitment to excellence, we’re your go-to partner for all your
            event needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Wedding Tents</h3>
              <p>Elegant and spacious tents for your special day.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
              <p>Professional setups for conferences and meetings.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">Party Supplies</h3>
              <p>Everything you need for birthdays, anniversaries, and celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to plan your next event? Reach out to us today!
          </p>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded text-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Ranka Tent Suppliers. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
