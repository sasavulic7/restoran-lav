import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  {/* About */}
                  <div className="md:col-span-2">
                      <img 
                          src="lav-logo.png" 
                          alt="Lav Logo" 
                          className="h-16 w-auto mb-6"
                      />
                      <p className="text-gray-300 mb-6">
                          Restoran LAV - Mesto gde tradicija susreće moderan ambijent. Posetite nas i uverite se u kvalitet naše usluge i hrane.
                      </p>
                      <div className="flex space-x-4">
                          <SocialIcon icon="facebook" />
                          <SocialIcon icon="instagram" />
                          <SocialIcon icon="twitter" />
                      </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                      <h3 className="text-xl font-bold mb-6 text-amber-400">Brzi linkovi</h3>
                      <ul className="space-y-3">
                          <FooterLink href="/" text="Početna" />
                          <FooterLink href="/o-nama" text="O nama" />
                          <FooterLink href="/jelovnik" text="Jelovnik" />
                          <FooterLink href="/galerija" text="Galerija" />
                          <FooterLink href="/kontakt" text="Kontakt" />
                      </ul>
                  </div>

                  {/* Contact */}
                  <div>
                      <h3 className="text-xl font-bold mb-6 text-amber-400">Kontakt</h3>
                      <div className="space-y-4">
                          <ContactItem 
                              icon="location" 
                              text="Kneginje Milice 99, Jagodina" 
                          />
                          <ContactItem 
                              icon="phone" 
                              text="035 8220912" 
                          />
                          <ContactItem 
                              icon="email" 
                              text="info@restoranlav.rs" 
                          />
                          <ContactItem 
                              icon="time" 
                              text="Pon-Pet: 08:00 - 00:00" 
                          />
                         
                      </div>
                  </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Restoran LAV. Sva prava zadržana.</p>
              </div>
          </div>
      </footer>
  );
}

// Helper components for Footer
function FooterLink({ href, text }) {
  return (
      <li>
          <a 
              href={href} 
              className="text-gray-300 hover:text-amber-300 transition-colors duration-300"
          >
              {text}
          </a>
      </li>
  );
}

function SocialIcon({ icon }) {
  const icons = {
      facebook: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
      instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
  };

  return (
      <a 
          href="#" 
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
      >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d={icons[icon]} />
          </svg>
      </a>
  );
}

function ContactItem({ icon, text }) {
  const icons = {
      location: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
      phone: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z",
      email: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
      time: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  };

  return (
      <div className="flex items-start">
          <svg className="w-5 h-5 mt-1 mr-3 text-amber-400 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="currentColor" d={icons[icon]} />
          </svg>
          <p className="text-gray-300">{text}</p>
      </div>
  );
}

export default Footer
