import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    quickLinks: [
      { label: t.nav.home, to: '/' },
      { label: t.nav.about, to: '/about' },
      { label: t.nav.sermons, to: '/sermons' },
      { label: t.nav.events, to: '/events' },
    ],
    ministries: [
      { label: 'Worship', to: '/ministries' },
      { label: 'Youth', to: '/ministries' },
      { label: 'Children', to: '/ministries' },
      { label: 'Outreach', to: '/ministries' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-600' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url(/12.jpg)' }} // Replace with actual church image
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-pink-950/30"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 blur-xl"></div>
                <div className="relative w-26 h-12 flex items-center justify-center shadow-lg">
                  <img src="/logo3.png" alt="Logo" className="w-26 h-10" />
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-white/5 border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              {t.footer.ministries}
            </h3>
            <ul className="space-y-3">
              {footerLinks.ministries.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              {t.footer.connectWithUs}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:admin@movementch.org"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-start space-x-3 group"
                >
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{t.footer.email}</div>
                    <div className="group-hover:text-cyan-400 transition-colors">
                      admin@movementch.org
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="text-gray-400 text-sm flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{t.footer.address}</div>
                    <div>Fourth Avenue, Masotsha Ndlovu Way<br />Parktown, Waterfalls<br />Harare, Zimbabwe</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="text-gray-400 text-sm flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{t.footer.serviceTime}</div>
                    <div>{t.footer.sunday}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-cyan-500/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-xl mb-3">
              {t.footer.newsletter}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Stay updated with our latest sermons, events, and news
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-sm text-white text-sm placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all backdrop-blur-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-medium shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <span>{t.footer.subscribe}</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-cyan-500 to-pink-500 text-white rounded-sm shadow-lg hover:shadow-cyan-500/50 transition-all z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;