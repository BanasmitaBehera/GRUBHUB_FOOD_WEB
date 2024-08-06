import React from 'react';
import Logo1 from "../assests/logo1.png";

const FooterContainer = () => {
  return (
    <footer className="bg-gray-900 h-400 text-white w-screen md:h-[600] p-6 no-scrollbar">
      <div className="container mx-auto grid gap-8 lg:grid-cols-3">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo1} className="w-8 h-8 object-cover" alt="logo" />
            <span className="text-xl font-bold">GrubHub</span>
          </div>
          <div className="text-2xl font-bold">The Best Restaurant is Now at Your Home</div>
          <p className="text-gray-400">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.
            Tempus egestas sed sed risus pretium quam.
          </p>
        </div>

        {/* Menu Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">MENU</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-gray-300 transition duration-300 flex items-center space-x-1"
              >
                <span>Home</span>
                <span>→</span>
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:text-gray-300 transition duration-300 flex items-center space-x-1"
              >
                <span>About Us</span>
                <span>→</span>
              </a>
            </li>
            <li>
              <a
                href="#restaurants"
                className="hover:text-gray-300 transition duration-300 flex items-center space-x-1"
              >
                <span>Restaurants</span>
                <span>→</span>
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="hover:text-gray-300 transition duration-300 flex items-center space-x-1"
              >
                <span>Contacts</span>
                <span>→</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">CONTACTS</h3>
          <p className="text-gray-400">
            Sahid Nagar, Bhubaneswar,Odisha
          </p>
          <p className="text-gray-400">grubhub@mail.net</p>
          <p className="text-gray-400">+91 8260938718</p>
          <div className="flex space-x-4">
            <a
              href="#facebook"
              className="hover:text-gray-300 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#instagram"
              className="hover:text-gray-300 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#twitter"
              className="hover:text-gray-300 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">
        <p>Copyright © 2024. GrubHub. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#privacy" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-gray-300 transition duration-300">Terms & Services</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
