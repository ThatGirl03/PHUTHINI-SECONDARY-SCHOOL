import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#vision-mission'},
  { name: 'Contact', href: '#contact' },
  {
    name: 'School Life',
    href: '#subjects-offered',
    dropdown: [
      { name: 'Subjects', href: '#subjects-offered' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Sports', href: '#sports' },
      { name: 'Events', href: '#events' },
      { name: 'Team', href: '#team' },
    ],
  },
  {
    name: 'School System',
    href: '#system',
    dropdown: [
      { name: 'Academic Calender', href: '#calender' },
      { name: 'Registration', href: '#registration' },
      { name: 'Reports', href: '#reports' },
      { name: 'Books', href: '#Books' },
      { name: 'Articles', href: '#Articles' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <img
              className="h-12 w-auto"
              src="/assets/logo (2).png"
              alt="School Logo"
            />
            <span className="ml-2 text-primary font-bold text-lg">
              Phuthini Secondary School
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </a>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-primary hover:text-black"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className={`md:hidden overflow-hidden bg-black`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="pl-4">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-sm"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}