import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  BookOpen, 
  Handshake,
  Award,
  Globe,
  MapPin,
  Calendar,
  TrendingUp,
  Smile
} from 'lucide-react';
import { GiWorld } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";


const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: GiWorld,
      title: t.about.value1,
      description: t.about.value1Text,
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: BookOpen,
      title: t.about.value2,
      description: t.about.value2Text,
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: LiaPeopleCarrySolid,
      title: t.about.value3,
      description: t.about.value3Text,
      gradient: 'from-cyan-400 to-pink-500',
    },
    {
      icon: Heart,
      title: t.about.value4,
      description: t.about.value4Text,
      gradient: 'from-pink-600 to-purple-500',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years of Ministry', icon: Calendar },
    { number: '5000+', label: 'Lives Touched', icon: LiaPeopleCarrySolid },
    { number: '50+', label: 'Community Programs', icon: Heart },
    { number: '15+', label: 'Partner Churches', icon: GiWorld },
  ];

  const milestones = [
    { 
      year: '2015', 
      title: 'Movement Church Founded',
      description: 'Started with a vision to reach the lost and make disciples',
      image: '/18.jpg'
    },
    { 
      year: '2017', 
      title: 'First Community Outreach',
      description: 'Launched our first community service initiative',
      image: '/51.jpg'
    },
    { 
      year: '2020', 
      title: 'Launched Online Services',
      description: 'Expanded our reach through digital platforms',
      image: '/15.jpg'
    },
    { 
      year: '2024', 
      title: 'Multiple Locations',
      description: 'Growing to serve more communities',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/3.jpg" 
            alt="Community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-pink-900/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-sm mb-8"
            >
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">{t.about.subtitle}</span>
            </motion.div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
              {t.about.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover our journey, vision, and the values that guide us in fulfilling the Great Commission.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center justify-center gap-4"
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-sm border border-white/20">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Multiple Locations</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-sm border border-white/20">
                <LiaPeopleCarrySolid className="w-5 h-5 text-pink-400" />
                <span className="text-white font-medium">5000+ Members</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-sm flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-white/60 rounded-sm"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm text-center hover:border-cyan-500/40 transition-all">
                  <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section with Image Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">{t.about.ourStory}</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t.about.storyText}
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                Since our founding, we have been committed to creating a welcoming environment where people can encounter God, grow in their faith, and make a difference in the world. Every Sunday, we gather to worship, learn, and encourage one another as we follow Jesus together.
              </p>

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-sm">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Years of Ministry</div>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm border border-pink-500/20 rounded-sm">
                  <div className="text-2xl font-bold text-pink-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Programs Launched</div>
                </div>
              </div>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image */}
                <div className="col-span-2 relative group overflow-hidden rounded-sm">
                  <img 
                    src="/44.jpg" 
                    alt="Community worship" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold">Sunday Worship</div>
                    <div className="text-xs text-gray-300">Join us every week</div>
                  </div>
                </div>

                {/* Two Smaller Images */}
                <div className="relative group overflow-hidden rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80" 
                    alt="Community service" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-xs font-semibold">Community Outreach</div>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-sm">
                  <img 
                    src="/45.jpg" 
                    alt="Youth ministry" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-xs font-semibold">Youth Ministry</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-gray-400 text-lg">Key milestones that shaped our ministry</p>
            </motion.div>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm mb-6">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{milestone.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {milestone.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm"></div>
                    <span className="text-sm text-gray-500 font-medium">Milestone {index + 1} of {milestones.length}</span>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative overflow-hidden rounded-sm border border-cyan-500/20">
                    <img 
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section with Split Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="relative p-12 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm">
                <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">{t.about.ourVision}</h2>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  {t.about.visionText}
                </p>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-semibold"
                  >
                    Learn More
                  </motion.button>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-400">Growing Impact</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl"></div>
                <div className="relative space-y-4">
                  <div className="overflow-hidden rounded-sm border border-cyan-500/20">
                    <img 
                      src="/21.jpg" 
                      alt="Vision" 
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-sm border border-pink-500/20">
                      <img 
                        src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80" 
                        alt="Mission" 
                        className="w-full h-32 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="overflow-hidden rounded-sm border border-cyan-500/20">
                      <img 
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80" 
                        alt="Impact" 
                        className="w-full h-32 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.about.ourValues}</h2>
              <p className="text-gray-300 text-lg">
                The core principles that guide everything we do
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-sm blur-2xl"></div>
                  
                  <div className={`inline-flex p-4 bg-gradient-to-br ${value.gradient} rounded-sm mb-6 relative z-10`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">{value.description}</p>
                  
                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section with Photos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.about.leadershipTeam}</h2>
              <p className="text-gray-300 text-lg">
                {t.about.meetOurPastors}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Pastor John', 
                role: 'Senior Pastor', 
                gradient: 'from-cyan-500 to-pink-500',
                image: '/54.webp',
                bio: 'Leading with vision and compassion for over 15 years'
              },
              { 
                name: 'Pastor Sarah', 
                role: 'Worship Pastor', 
                gradient: 'from-pink-500 to-purple-500',
                image: '/52.jpg',
                bio: 'Creating spaces of authentic worship and encounter'
              },
              { 
                name: 'Pastor David', 
                role: 'Youth Pastor', 
                gradient: 'from-cyan-400 to-pink-500',
                image: '/53.webp',
                bio: 'Empowering the next generation to love and serve'
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-pink-600/30 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    {/* Gradient Badge */}
                    <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${leader.gradient} rounded-sm`}>
                      <span className="text-white text-sm font-semibold">{leader.role}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white/5 backdrop-blur-xl">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-gray-400 mb-4">{leader.bio}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-cyan-400 font-medium flex items-center gap-2 group/btn"
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80" 
            alt="Join us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-pink-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm mb-8">
              <Smile className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Join Our Family</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Be Part of Our Story
            </h2>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Join us in fulfilling the Great Commission and making disciples of all nations. Your story matters.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold text-lg shadow-2xl shadow-cyan-500/50"
              >
                Join Us This Sunday
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-sm font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-400" />
                <span>Sundays 9AM & 11AM</span>
              </div>
              <div className="flex items-center gap-2">
                <LiaPeopleCarrySolid className="w-5 h-5 text-purple-400" />
                <span>All Are Welcome</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;