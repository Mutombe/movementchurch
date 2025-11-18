import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.emailUs,
      value: 'admin@movementch.org',
      link: 'mailto:admin@movementch.org',
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      icon: Phone,
      label: t.contact.callUs,
      value: '+263 XXX XXX XXX',
      link: 'tel:+263XXXXXXXXX',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: MapPin,
      label: t.contact.visitUs,
      value: t.contact.address,
      link: null,
      gradient: 'from-cyan-400 to-pink-500',
    },
    {
      icon: Clock,
      label: t.contact.serviceTime,
      value: t.contact.sundayMorning,
      link: null,
      gradient: 'from-pink-600 to-purple-600',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:text-red-500' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-cyan-950/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-medium">{t.contact.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question or want to learn more? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
                  <h2 className="text-3xl font-bold text-white mb-2">{t.contact.getInTouch}</h2>
                  <p className="text-gray-400 mb-8">Fill out the form and we'll be in touch soon</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.contact.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="+263 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.contact.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.sendMessage}</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="block p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-lg`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-lg`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl"
              >
                <h3 className="text-white font-bold text-xl mb-4">{t.contact.followUs}</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-white/10 border border-cyan-500/20 rounded-lg hover:bg-white/20 transition-all group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-300 group-hover:text-current transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-cyan-500/20"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">View on Map</p>
                    <p className="text-gray-400 text-sm">Parktown, Waterfalls, Harare</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              We'd Love to See You This Sunday!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us for worship, fellowship, and powerful teaching from God's Word.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
            >
              Plan Your Visit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;