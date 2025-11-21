import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./lunguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Navigation,
} from "lucide-react";
import { toast } from "sonner";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showContactOptions, setShowContactOptions] = useState(false);

  // Church location coordinates (Parktown, Waterfalls, Harare)
  const churchLocation = [-17.891163, 31.0232419,16.88]; // Approximate coordinates for Harare, Zimbabwe

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show contact method selection
    setShowContactOptions(true);
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'm ${formData.name}.

Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}

Message:
${formData.message}

---
Sent from Movement Church Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "263XXXXXXXXX"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp...");

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowContactOptions(false);
    }, 1000);
  };

  const handleEmail = () => {
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ""}

Message:
${formData.message}

---
Sent from Movement Church Website`;

    const mailtoUrl = `mailto:admin@movementch.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    toast.success("Opening email client...");

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowContactOptions(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.emailUs,
      value: "admin@movementch.org",
      link: "mailto:admin@movementch.org",
      gradient: "from-cyan-500 to-pink-500",
    },
    {
      icon: Phone,
      label: t.contact.callUs,
      value: "+263 XXX XXX XXX",
      link: "tel:+263XXXXXXXXX",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Us",
      value: "+263 XXX XXX XXX",
      link: "https://wa.me/263XXXXXXXXX",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      label: t.contact.visitUs,
      value: t.contact.address,
      link: null,
      gradient: "from-cyan-400 to-pink-500",
    },
    {
      icon: Clock,
      label: t.contact.serviceTime,
      value: t.contact.sundayMorning,
      link: null,
      gradient: "from-pink-600 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Youtube, href: "#", label: "Youtube", color: "hover:text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-sm blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-sm blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-sm mb-8">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                {t.contact.subtitle}
              </span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 leading-none">
              {t.contact.title}
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Have a question or want to learn more? We'd love to hear from you!
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-400" />
                <span className="font-medium">Multiple contact methods</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-pink-600/30 rounded-sm blur-3xl"></div>

                <div className="relative p-10 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white mb-3">
                      {t.contact.getInTouch}
                    </h2>
                    <p className="text-gray-400 text-lg">
                      Fill out the form and choose how you'd like us to reach
                      you
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/20 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/20 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t.contact.phone} (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/20 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                        placeholder="+263 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t.contact.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/20 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {!showContactOptions ? (
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold text-lg shadow-2xl shadow-cyan-500/50 flex items-center justify-center gap-2"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    ) : (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-sm">
                            <p className="text-white font-semibold mb-4 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-cyan-400" />
                              Choose how you'd like to send your message:
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <motion.button
                              type="button"
                              onClick={handleWhatsApp}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-sm font-bold flex flex-col items-center gap-2 shadow-lg hover:shadow-green-500/50 transition-all"
                            >
                              <MessageCircle className="w-8 h-8" />
                              <span>WhatsApp</span>
                            </motion.button>

                            <motion.button
                              type="button"
                              onClick={handleEmail}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold flex flex-col items-center gap-2 shadow-lg hover:shadow-cyan-500/50 transition-all"
                            >
                              <Mail className="w-8 h-8" />
                              <span>Email</span>
                            </motion.button>
                          </div>

                          <motion.button
                            type="button"
                            onClick={() => setShowContactOptions(false)}
                            whileHover={{ scale: 1.02 }}
                            className="w-full px-6 py-3 bg-white/5 border border-cyan-500/20 text-gray-300 rounded-sm font-semibold hover:bg-white/10 transition-all"
                          >
                            Back to Edit
                          </motion.button>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
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
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>

                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.includes("http") ? "_blank" : undefined}
                      rel={
                        info.link.includes("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="relative block p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 p-4 bg-gradient-to-br ${info.gradient} rounded-sm`}
                        >
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm font-medium mb-1">
                            {info.label}
                          </div>
                          <div className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </a>
                  ) : (
                    <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 p-4 bg-gradient-to-br ${info.gradient} rounded-sm`}
                        >
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm font-medium mb-1">
                            {info.label}
                          </div>
                          <div className="text-white text-lg font-semibold">
                            {info.value}
                          </div>
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
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-xl"></div>

                <div className="relative p-8 bg-gradient-to-br from-cyan-600/10 to-pink-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-sm">
                  <h3 className="text-white font-bold text-2xl mb-6">
                    {t.contact.followUs}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-4 bg-white/10 border border-cyan-500/20 rounded-sm hover:bg-white/20 transition-all group ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-7 h-7 text-gray-300 group-hover:text-current transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-5xl font-bold text-white">Find Us</h2>
              <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-cyan-500 rounded-sm"></div>
            </div>
            <p className="text-gray-400 text-xl">
              Located in the heart of Harare
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl"></div>

            <div className="relative overflow-hidden rounded-sm border border-cyan-500/20">
              <div className="h-[500px] bg-black">
                <MapContainer
                  center={churchLocation}
                  zoom={15}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                  className="z-0"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={churchLocation}>
                    <Popup>
                      <div className="text-center p-2">
                        <strong className="text-lg">Movement Church</strong>
                        <p className="text-sm mt-1">
                          Parktown, Waterfalls, Harare
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          Join us every Sunday at 10:00 AM
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Map Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-white font-bold text-lg">
                        Movement Church
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      Parktown, Waterfalls, Harare, Zimbabwe
                    </p>
                  </div>
                  <motion.a
                    href={`https://www.google.com/maps/search/?api=1&query=${churchLocation[0]},${churchLocation[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>Get Directions</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&q=80"
            alt="Church"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-pink-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-6 bg-white/10 backdrop-blur-md rounded-sm mb-8">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              We'd Love to See You This Sunday!
            </h2>

            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Join us for worship, fellowship, and powerful teaching from God's
              Word.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold text-lg shadow-2xl shadow-cyan-500/50"
              >
                Plan Your Visit
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-sm font-bold text-lg hover:bg-white/20 transition-all"
              >
                View Service Times
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
