import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Honey Shop</h3>
          <p>Pure organic honey, fresh from our hives.</p>
          <p>Contact: info@honeyshop.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-1">
            <li><a href="#" className="hover:text-yellow-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-600 transition">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-600 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-600 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Honey Shop. All rights reserved.
      </div>
    </footer>
  );
}
