import React from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
      <nav className="bg-red-900 text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                  {/* Logo */}
                  <div className="flex items-center">
                      <img
                          src="lav-logo.png"
                          alt="Restoran Lav logo"
                          className="h-16 w-auto"
                      />
                  </div>

                  {/* Desktop Menu */}
                  <div className="hidden md:flex space-x-8">
                      <NavLink href="/" text="Početna" />
                      <NavLink href="/o-nama" text="O nama" />
                      <NavLink href="/jelovnik" text="Jelovnik" />
                      <NavLink href="/galerija" text="Galerija" />
                      <NavLink href="/kontakt" text="Kontakt" />
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden flex items-center">
                      <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="text-white focus:outline-none"
                      >
                          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {isOpen ? (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              ) : (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              )}
                          </svg>
                      </button>
                  </div>
              </div>

              {/* Mobile Menu */}
              {isOpen && (
                  <div className="md:hidden pb-4">
                      <div className="flex flex-col space-y-3">
                          <MobileNavLink href="/" text="Početna" />
                          <MobileNavLink href="/about" text="O nama" />
                          <MobileNavLink href="/menu" text="Jelovnik" />
                          <MobileNavLink href="/gallery" text="Galerija" />
                          <MobileNavLink href="/contact" text="Kontakt" />
                      </div>
                  </div>
              )}
          </div>
      </nav>
  );
}

// Helper components
function NavLink({ href, text }) {
  return (
      <a 
          href={href} 
          className="px-3 py-2 text-lg font-medium hover:text-amber-300 transition-colors duration-300 relative group"
      >
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
  );
}

function MobileNavLink({ href, text }) {
  return (
      <a 
          href={href} 
          className="px-3 py-2 text-lg font-medium hover:text-amber-300 hover:bg-red-800 rounded transition-colors duration-300"
      >
          {text}
      </a>
  );
}
export default Navbar
