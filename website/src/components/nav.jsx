import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GiWorld } from "react-icons/gi";
import { Menu, X, ChevronDown, Globe, Radio, ChevronRight } from 'lucide-react';
import { useLanguage } from './lunguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'nd', name: 'Ndebele', flag: '🇿🇼' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.sermons, to: '/sermons' },
    { label: t.nav.events, to: '/events' },
    { label: t.nav.ministries, to: '/ministries' },
    { label: t.nav.give, to: '/give' },
    { label: t.nav.contact, to: '/contact' },
  ];

  const resourcesLinks = [
    { label: t.nav.resources || 'Resources', to: '/resources' },
    { label: t.nav.blog || 'Blog', to: '/blog' },
    { label: t.nav.gallery || 'Gallery', to: '/gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-xl"></div>
                  <div className="relative w-26 h-12  flex items-center justify-center shadow-lg">
                    <img src="/logo3.png" alt="Logo" className="w-26 h-10" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setResourcesDropdown(!resourcesDropdown)}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <span className="text-sm font-medium">
                    {t.nav.resources || 'Resources'}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {resourcesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-44 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-sm shadow-lg overflow-hidden"
                    >
                      {resourcesLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.to}
                          onClick={() => setResourcesDropdown(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === link.to
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-cyan-500/10'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <GiWorld className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {languages.find(l => l.code === language)?.name}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {langDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-40 bg-gray-900/95 backdrop-blur-xl border border-cyan-500/20 rounded-sm shadow-lg overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setLangDropdown(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm flex items-center space-x-2 transition-colors ${
                            language === lang.code
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-cyan-500/10'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Watch Live Button */}
              <Link to="/sermons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-medium shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
                >
                  <Radio className="w-4 h-4" />
                  <span>{t.nav.watchLive}</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="text-gray-300 hover:text-cyan-400"
              >
                <GiWorld className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyan-400"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Language Dropdown */}
        <AnimatePresence>
          {langDropdown && !isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-4 py-2 space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangDropdown(false);
                    }}
                    className={`w-full px-4 py-2 text-left rounded-sm flex items-center space-x-2 transition-colors ${
                      language === lang.code
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-cyan-500/10'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Navigation Menu - Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed left-0 right-0 bottom-0 top-20 bg-black z-[60] overflow-y-auto"
          >
            <div className="min-h-full px-6 py-8">
              <div className="space-y-2 pb-20">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-6 py-4 rounded-sm transition-all ${
                      location.pathname === item.to
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:bg-cyan-500/10 border border-transparent'
                    }`}
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                ))}
                
                {/* Resources Section - Mobile */}
                <div className="mt-4">
                  <div className="px-6 py-2 text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                    {t.nav.resources || 'Resources'}
                  </div>
                  {resourcesLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-6 py-3 rounded-sm transition-all ${
                        location.pathname === link.to
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-300 hover:bg-cyan-500/10 border border-transparent'
                      }`}
                    >
                      <span className="text-base font-medium">{link.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
                
                {/* Watch Live Button */}
                <Link to="/sermons" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-medium shadow-lg flex items-center justify-between"
                  >
                    <span className="flex items-center space-x-3">
                      <Radio className="w-5 h-5" />
                      <span className="text-lg">{t.nav.watchLive}</span>
                    </span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;