import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  Music, 
  Users, 
  Baby, 
  Heart, 
  Handshake, 
  Video,
  BookOpen,
  Globe2,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Target,
  Zap
} from 'lucide-react';
import { GiWorld } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";

const Ministries = () => {
  const { t } = useLanguage();

  const ministries = [
    {
      icon: Music,
      title: t.ministries.worship,
      description: t.ministries.worshipText,
      gradient: 'from-cyan-500 to-pink-500',
      features: ['Choir', 'Band', 'Sound & Tech', 'Creative Arts'],
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
      volunteers: 45,
    },
    {
      icon: LiaPeopleCarrySolid,
      title: t.ministries.youth,
      description: t.ministries.youthText,
      gradient: 'from-pink-500 to-purple-500',
      features: ['Teen Group', 'Young Adults', 'Leadership Training', 'Events'],
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      volunteers: 30,
    },
    {
      icon: Baby,
      title: t.ministries.children,
      description: t.ministries.childrenText,
      gradient: 'from-cyan-400 to-pink-500',
      features: ['Sunday School', 'Kids Worship', 'Bible Stories', 'Activities'],
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
      volunteers: 25,
    },
    {
      icon: Heart,
      title: t.ministries.prayer,
      description: t.ministries.prayerText,
      gradient: 'from-pink-600 to-purple-600',
      features: ['Prayer Meetings', 'Intercessors', 'Healing Prayer', 'Fasting'],
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
      volunteers: 40,
    },
    {
      icon: Handshake,
      title: t.ministries.outreach,
      description: t.ministries.outreachText,
      gradient: 'from-cyan-500 to-pink-500',
      features: ['Community Service', 'Food Bank', 'Hospital Visits', 'Evangelism'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      volunteers: 60,
    },
    {
      icon: Video,
      title: t.ministries.media,
      description: t.ministries.mediaText,
      gradient: 'from-pink-500 to-cyan-400',
      features: ['Livestream', 'Photography', 'Video Editing', 'Social Media'],
      image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80',
      volunteers: 20,
    },
    {
      icon: BookOpen,
      title: 'Teaching Ministry',
      description: 'Studying and teaching God\'s Word through Bible studies and small groups.',
      gradient: 'from-cyan-600 to-pink-600',
      features: ['Bible Studies', 'Small Groups', 'Discipleship', 'Training'],
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
      volunteers: 35,
    },
    {
      icon: GiWorld,
      title: 'Missions Ministry',
      description: 'Taking the Gospel to the nations through missions and partnerships.',
      gradient: 'from-pink-600 to-purple-500',
      features: ['Mission Trips', 'Support', 'Training', 'Partnerships'],
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
      volunteers: 28,
    },
  ];

  const impactStats = [
    { number: '8', label: 'Active Ministries', icon: Target },
    { number: '283', label: 'Volunteers Serving', icon: LiaPeopleCarrySolid },
    { number: '1200+', label: 'Lives Impacted Monthly', icon: Heart },
    { number: '52', label: 'Weekly Programs', icon: Zap },
  ];

  const steps = [
    { 
      step: '01', 
      title: 'Pray & Reflect', 
      description: 'Ask God where He wants you to serve and what gifts He has given you.',
      icon: Heart,
    },
    { 
      step: '02', 
      title: 'Explore Ministries', 
      description: 'Learn about our different ministries and find one that matches your passion.',
      icon: BookOpen,
    },
    { 
      step: '03', 
      title: 'Connect with Leaders', 
      description: 'Reach out to ministry leaders and attend an orientation session.',
      icon: MessageCircle,
    },
    { 
      step: '04', 
      title: 'Start Serving', 
      description: 'Begin making a difference and using your gifts to build God\'s kingdom!',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-sm blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-sm blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-pink-500/30 rounded-sm mb-8">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">{t.ministries.subtitle}</span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 leading-none">
              {t.ministries.title}
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover your gifts, serve others, and grow in faith through our diverse ministries.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold text-lg shadow-2xl inline-flex items-center gap-2"
            >
              <span>Find Your Ministry</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all text-center">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl"></div>
              <div className="relative overflow-hidden rounded-sm border border-cyan-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1000&q=80"
                  alt="Worship Ministry"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-8 left-8 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm">
                  <span className="text-white font-bold text-lg">Featured Ministry</span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">45+</div>
                      <div className="text-sm text-gray-300">Active Volunteers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">4</div>
                      <div className="text-sm text-gray-300">Sub-Teams</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-6">
                <Music className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-5xl font-bold text-white mb-6">
                {t.ministries.worship}
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t.ministries.worshipText}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Choir', 'Band', 'Sound & Tech', 'Creative Arts'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-sm">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold inline-flex items-center gap-2 shadow-lg"
              >
                <span>{t.ministries.joinMinistry}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Ministries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-5xl font-bold text-white">{t.ministries.allMinistries}</h2>
              <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-cyan-500 rounded-sm"></div>
            </div>
            <p className="text-gray-400 text-xl">
              Find where God is calling you to serve
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={ministry.image}
                      alt={ministry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 p-4 bg-gradient-to-br ${ministry.gradient} rounded-sm`}>
                      <ministry.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Volunteers Count */}
                    <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-sm flex items-center gap-2">
                      <LiaPeopleCarrySolid className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">{ministry.volunteers}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {ministry.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {ministry.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {ministry.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-sm"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              How to Get Involved
            </h2>
            <p className="text-gray-400 text-xl">
              Four simple steps to start serving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-pink-600/10 rounded-sm blur-xl group-hover:blur-2xl transition-all"></div>
                
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm mb-6 text-3xl font-bold text-white">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex p-3 bg-cyan-500/20 rounded-sm mb-4">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Stories from Our Volunteers
            </h2>
            <p className="text-gray-400 text-xl">
              Hear from those who are serving and making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Worship Team',
                quote: 'Serving in worship has transformed my relationship with God. I\'ve found my purpose and community here.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'Youth Ministry',
                quote: 'Working with young people has been incredibly rewarding. Watching them grow in faith is amazing!',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Outreach',
                quote: 'Serving the community has opened my eyes to God\'s love. Every week brings new opportunities to share hope.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all">
                  {/* Image */}
                  <div className="relative w-20 h-20 mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <p className="text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <div className="text-white font-bold mb-1">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80" 
            alt="Join ministry" 
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
              <Heart className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Make a Difference?
            </h2>

            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Use your gifts and talents to serve God and His people. Join a ministry today!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold text-lg shadow-2xl shadow-cyan-500/50"
              >
                Join a Ministry
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-sm font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;