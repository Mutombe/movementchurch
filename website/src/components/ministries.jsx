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
  ArrowRight
} from 'lucide-react';

const Ministries = () => {
  const { t } = useLanguage();

  const ministries = [
    {
      icon: Music,
      title: t.ministries.worship,
      description: t.ministries.worshipText,
      gradient: 'from-cyan-500 to-pink-500',
      features: ['Choir', 'Band', 'Sound & Tech', 'Creative Arts'],
    },
    {
      icon: Users,
      title: t.ministries.youth,
      description: t.ministries.youthText,
      gradient: 'from-pink-500 to-purple-500',
      features: ['Teen Group', 'Young Adults', 'Leadership Training', 'Events'],
    },
    {
      icon: Baby,
      title: t.ministries.children,
      description: t.ministries.childrenText,
      gradient: 'from-cyan-400 to-pink-500',
      features: ['Sunday School', 'Kids Worship', 'Bible Stories', 'Activities'],
    },
    {
      icon: Heart,
      title: t.ministries.prayer,
      description: t.ministries.prayerText,
      gradient: 'from-pink-600 to-purple-600',
      features: ['Prayer Meetings', 'Intercessors', 'Healing Prayer', 'Fasting'],
    },
    {
      icon: Handshake,
      title: t.ministries.outreach,
      description: t.ministries.outreachText,
      gradient: 'from-cyan-500 to-pink-500',
      features: ['Community Service', 'Food Bank', 'Hospital Visits', 'Evangelism'],
    },
    {
      icon: Video,
      title: t.ministries.media,
      description: t.ministries.mediaText,
      gradient: 'from-pink-500 to-cyan-400',
      features: ['Livestream', 'Photography', 'Video Editing', 'Social Media'],
    },
    {
      icon: BookOpen,
      title: 'Teaching Ministry',
      description: 'Studying and teaching God\'s Word through Bible studies and small groups.',
      gradient: 'from-cyan-600 to-pink-600',
      features: ['Bible Studies', 'Small Groups', 'Discipleship', 'Training'],
    },
    {
      icon: Globe2,
      title: 'Missions Ministry',
      description: 'Taking the Gospel to the nations through missions and partnerships.',
      gradient: 'from-pink-600 to-purple-500',
      features: ['Mission Trips', 'Support', 'Training', 'Partnerships'],
    },
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
            <div className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full mb-6">
              <span className="text-pink-400 text-sm font-medium">{t.ministries.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.ministries.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover your gifts, serve others, and grow in faith through our diverse ministries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-pink-600/90 backdrop-blur-xl"></div>
            <div className="relative grid md:grid-cols-2 gap-8 p-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-white text-sm font-bold">FEATURED MINISTRY</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {t.ministries.worship}
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  {t.ministries.worshipText}
                </p>
                <div className="space-y-2 mb-8">
                  {['Choir', 'Band', 'Sound & Tech', 'Creative Arts'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-white">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>{t.ministries.joinMinistry}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Icon */}
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="relative p-12 bg-white/10 backdrop-blur-sm rounded-full border-4 border-white/30">
                    <Music className="w-32 h-32 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{t.ministries.allMinistries}</h2>
            <p className="text-gray-400 text-lg">
              Find where God is calling you to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative h-full flex flex-col bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-cyan-500/10">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${ministry.gradient} rounded-xl mb-4`}>
                      <ministry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{ministry.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{ministry.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 p-6">
                    <div className="space-y-2 mb-6">
                      {ministry.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Get Involved
            </h2>
            <p className="text-gray-400 text-lg">
              Simple steps to start serving
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Pray', description: 'Ask God where He wants you to serve' },
              { step: '02', title: 'Explore', description: 'Learn about our different ministries' },
              { step: '03', title: 'Connect', description: 'Contact the ministry leader' },
              { step: '04', title: 'Serve', description: 'Start making a difference!' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
                <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mb-4 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black via-cyan-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use your gifts and talents to serve God and His people. Join a ministry today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
              >
                Join a Ministry
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/50 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
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