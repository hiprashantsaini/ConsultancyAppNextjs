"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Savior Hires</h2>
          <p className="mt-3 text-sm">
            Bridging the gap between job seekers and employers with career
            guidance, resume building, and placement support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Plans", "Services", "About Us", "Contact"].map((item, idx) => {
              let href=''
              if(item==='Plans'){
                href='/#plans';
              }else if (item==='Services'){
                href='/services'
              }else if (item==='About Us'){
                href='/about';
              }else if (item==='Contact'){
                href='/#contact';
              }
              return (
              <li key={idx}>
                <Link
                  href={`${href}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            )})}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 8791318483
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@jobnest.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> New Delhi, India
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[ 
              { Icon: Facebook, link: "#" },
              { Icon: Linkedin, link: "#" },
              { Icon: Instagram, link: "#" },
            ].map(({ Icon, link }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Savior hire. All rights reserved.
      </div>
    </footer>
  );
}
