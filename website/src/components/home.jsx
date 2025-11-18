import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Users, 
  Heart, 
  BookOpen, 
  ArrowRight,
  MapPin,
  Clock,
  Radio,
  TrendingUp,
  Award,
  Globe2
} from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your church images here
  const heroImages = [
    '/1.jpg', // Replace with your actual image paths
    '/6.jpg',
    '/16.jpg',
    '/34.jpg',
    '/19.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${heroImages[currentImageIndex]})`,
                }}
              />
              {/* Gradient Overlays for Blending */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/60 to-cyan-950/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Image Indicators */}
          <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-cyan-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Live Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full mb-6 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Radio className="w-4 h-4 text-pink-500" />
              <span className="text-pink-400 text-sm font-medium">{t.home.liveNow}</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              {t.home.welcome}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                {t.home.churchName}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              {t.home.tagline}
            </p>

            <p className="text-lg text-cyan-400 font-semibold mb-10">
              {t.home.mission}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
                >
                  <span>{t.home.joinUs}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/sermons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/50 text-white rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{t.home.watchOnline}</span>
                </motion.button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
                <motion.div
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Service Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl"
            >
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">{t.home.sundayService}</div>
                  <div className="text-white font-semibold">{t.home.serviceTime}</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-cyan-500/20"></div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-white font-semibold">{t.home.serviceLocation}</div>
                  <div className="text-sm text-gray-400">Waterfalls, Harare</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '500+', label: 'Members', color: 'from-cyan-500 to-cyan-600' },
              { icon: Calendar, value: '50+', label: 'Events Yearly', color: 'from-pink-500 to-pink-600' },
              { icon: Heart, value: '10+', label: 'Ministries', color: 'from-cyan-400 to-pink-500' },
              { icon: Globe2, value: '3', label: 'Communities', color: 'from-pink-600 to-purple-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all text-center">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-600/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-cyan-400/50" />
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-4">
                <span className="text-cyan-400 text-sm font-medium">{t.home.ourMission}</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.home.mission}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t.home.missionText}
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.home.getConnected}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t.home.connectText}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Join a Ministry',
                description: 'Find your place to serve and grow in faith',
                link: '/ministries',
                gradient: 'from-cyan-500 to-cyan-600',
              },
              {
                icon: Calendar,
                title: 'Attend an Event',
                description: 'Connect with others at our upcoming gatherings',
                link: '/events',
                gradient: 'from-pink-500 to-pink-600',
              },
              {
                icon: Play,
                title: 'Watch Sermons',
                description: 'Be inspired by powerful messages from God\'s Word',
                link: '/sermons',
                gradient: 'from-cyan-400 to-pink-500',
              },
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all h-full">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    <div className="mt-6 flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-pink-600/90 backdrop-blur-xl"></div>
            <div className="relative p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t.home.visitUs}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join us this Sunday at 10:00 AM for worship, fellowship, and powerful teaching from God's Word.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Directions
                  </motion.button>
                </Link>
                <Link to="/get-involved">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Plan Your Visit
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;