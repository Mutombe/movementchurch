import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "./lunguageContext";
import { Link } from "react-router-dom";
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
  Globe2,
} from "lucide-react";
import { GiWorld } from "react-icons/gi";
import { useCountUp } from "./useCountUp";
import { LiaPeopleCarrySolid } from "react-icons/lia";

// Count Up Component
const CountUpStat = ({ end, suffix = "", inView }) => {
  const count = useCountUp(inView ? end : 0, 2000);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your church images here
  const heroImages = [
    "/1.jpg", // Replace with your actual image paths
    "/6.jpg",
    "/16.jpg",
    "/34.jpg",
    "/19.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const stats = [
    {
      icon: LiaPeopleCarrySolid,
      value: 500,
      suffix: "+",
      label: "Members",
      color: "from-cyan-500 to-cyan-600",
      size: "large",
    },
    {
      icon: Calendar,
      value: 50,
      suffix: "+",
      label: "Events Yearly",
      color: "from-pink-500 to-pink-600",
      size: "small",
    },
    {
      icon: Heart,
      value: 10,
      suffix: "+",
      label: "Ministries",
      color: "from-cyan-400 to-pink-500",
      size: "small",
    },
    {
      icon: GiWorld,
      value: 3,
      suffix: "",
      label: "Communities",
      color: "from-pink-600 to-purple-500",
      size: "medium",
    },
  ];

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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-sm blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-sm blur-3xl"
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
                className={`w-2 h-2 rounded-sm transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-cyan-400 w-8"
                    : "bg-white/30 hover:bg-white/50"
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
            {/* Live Badge 
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-sm mb-6 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Radio className="w-4 h-4 text-pink-500" />
              <span className="text-pink-400 text-sm font-medium">{t.home.liveNow}</span>
            </motion.div>*/}

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
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
                >
                  <span>{t.home.joinUs}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/sermons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/50 text-white rounded-sm font-semibold hover:bg-white/20 transition-all flex items-center space-x-2"
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
              <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-sm flex justify-center">
                <motion.div
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-sm mt-2"
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
              className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm"
            >
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">
                    {t.home.sundayService}
                  </div>
                  <div className="text-white font-semibold">
                    {t.home.serviceTime}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-cyan-500/20"></div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {t.home.serviceLocation}
                  </div>
                  <div className="text-sm text-gray-400">
                    Waterfalls, Harare
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* Stats Section - Bento Grid Layout */}
      <section
        ref={statsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {/* Large stat - spans 2x2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="col-span-4 md:col-span-2 row-span-2 relative group overflow-hidden rounded-sm"
            >
              {/* Background Image - More Visible */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url(/46.jpg)" }}
              />
              {/* Lighter Dark Overlay for More Image Visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/50 transition-all"></div>
              {/* Subtle Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-sm blur-xl group-hover:blur-2xl transition-all"></div>

              <div className="relative h-full p-8 md:p-10 backdrop-blur-[2px] border border-white/20 rounded-sm hover:border-white/30 transition-all flex flex-col justify-between">
                <div
                  className={`inline-flex p-6 bg-gradient-to-br ${stats[0].color} rounded-sm w-fit mb-6 shadow-lg`}
                >
                  {React.createElement(stats[0].icon, {
                    className: "w-10 h-10 md:w-12 md:h-12 text-white",
                  })}
                </div>
                <div>
                  <div className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                    <CountUpStat
                      end={stats[0].value}
                      suffix={stats[0].suffix}
                      inView={isStatsInView}
                    />
                  </div>
                  <div className="text-white/95 text-lg md:text-xl font-medium drop-shadow-md">
                    {stats[0].label}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small stat - top right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-4 md:col-span-2 relative group overflow-hidden rounded-sm"
            >
              {/* Background Image - More Visible */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url(/2.jpg)" }}
              />
              {/* Lighter Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/50 transition-all"></div>
              {/* Subtle Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-sm blur-xl group-hover:blur-2xl transition-all"></div>

              <div className="relative p-6 md:p-8 backdrop-blur-[2px] border border-white/20 rounded-sm hover:border-white/30 transition-all h-full flex items-center justify-between">
                <div>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    <CountUpStat
                      end={stats[1].value}
                      suffix={stats[1].suffix}
                      inView={isStatsInView}
                    />
                  </div>
                  <div className="text-white/95 text-sm md:text-base font-medium drop-shadow-md">
                    {stats[1].label}
                  </div>
                </div>
                <div
                  className={`p-4 bg-gradient-to-br ${stats[1].color} rounded-sm shadow-lg`}
                >
                  {React.createElement(stats[1].icon, {
                    className: "w-6 h-6 md:w-8 md:h-8 text-white",
                  })}
                </div>
              </div>
            </motion.div>

            {/* Medium stat - middle right (Communities) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2 md:col-span-1 relative group overflow-hidden rounded-sm"
            >
              {/* Background Image - More Visible */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url(/29.jpg)" }}
              />
              {/* Lighter Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/50 transition-all"></div>
              {/* Subtle Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 to-pink-600/15 rounded-sm blur-lg group-hover:blur-xl transition-all"></div>

              <div className="relative p-6 backdrop-blur-[2px] border border-white/20 rounded-sm hover:border-white/30 transition-all h-full flex flex-col justify-between">
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${stats[3].color} rounded-sm w-fit mb-4 shadow-lg`}
                >
                  {React.createElement(stats[3].icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    <CountUpStat
                      end={stats[3].value}
                      suffix={stats[3].suffix}
                      inView={isStatsInView}
                    />
                  </div>
                  {/* Mobile: Show abbreviated text, Desktop: Show full text */}
                  <div className="text-white/95 text-xs md:text-sm font-medium drop-shadow-md">
                    <span className="md:hidden">Groups</span>
                    <span className="hidden md:inline">{stats[3].label}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small stat - bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 md:col-span-1 relative group overflow-hidden rounded-sm"
            >
              {/* Background Image - More Visible */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url(/34.jpg)" }}
              />
              {/* Lighter Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 group-hover:from-black/30 group-hover:via-black/40 group-hover:to-black/50 transition-all"></div>
              {/* Subtle Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 to-pink-600/15 rounded-sm blur-lg group-hover:blur-xl transition-all"></div>

              <div className="relative p-6 backdrop-blur-[2px] border border-white/20 rounded-sm hover:border-white/30 transition-all h-full flex flex-col justify-between">
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${stats[2].color} rounded-sm w-fit mb-4 shadow-lg`}
                >
                  {React.createElement(stats[2].icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                    <CountUpStat
                      end={stats[2].value}
                      suffix={stats[2].suffix}
                      inView={isStatsInView}
                    />
                  </div>
                  <div className="text-white/95 text-xs md:text-sm font-medium drop-shadow-md">
                    {stats[2].label}
                  </div>
                </div>
              </div>
            </motion.div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-600/20 rounded-sm blur-2xl"></div>
              <div className="relative aspect-square rounded-sm overflow-hidden border border-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-600/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/1.jpg" // Replace with your church image
                    alt="Church Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-sm mb-4">
                <span className="text-cyan-400 text-sm font-medium">
                  {t.home.ourMission}
                </span>
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
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-semibold shadow-lg"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Get Connected with BG Images */}
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
                icon: LiaPeopleCarrySolid,
                title: "Join a Ministry",
                description: "Find your place to serve and grow in faith",
                link: "/ministries",
                gradient: "from-cyan-500 to-cyan-600",
                bgImage: "/1.jpg", // Replace with actual church images
              },
              {
                icon: Calendar,
                title: "Attend an Event",
                description: "Connect with others at our upcoming gatherings",
                link: "/events",
                gradient: "from-pink-500 to-pink-600",
                bgImage: "/6.jpg", // Replace with actual church images
              },
              {
                icon: Play,
                title: "Watch Sermons",
                description: "Be inspired by powerful messages from God's Word",
                link: "/sermons",
                gradient: "from-cyan-400 to-pink-500",
                bgImage: "/16.jpg", // Replace with actual church images
              },
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group h-full overflow-hidden rounded-sm"
                >
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 group-hover:from-black/85 group-hover:via-black/80 group-hover:to-black/85 transition-all"></div>

                  {/* Gradient Blur Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>

                  {/* Content */}
                  <div className="relative p-8 backdrop-blur-sm border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all h-full">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-sm mb-4 shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
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

      {/* CTA Section - Visit Us with BG Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/34.jpg)" }} // Replace with actual church image
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/95 via-purple-600/90 to-pink-600/95 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t.home.visitUs}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join us this Sunday at 10:00 AM for worship, fellowship, and
                powerful teaching from God's Word.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-pink-600 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Directions
                  </motion.button>
                </Link>
                <Link to="/get-involved">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-sm font-semibold hover:bg-white/20 transition-all"
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
