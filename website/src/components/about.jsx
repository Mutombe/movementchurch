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
  Globe
} from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Globe,
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
      icon: Users,
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

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-medium">{t.about.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our journey, vision, and the values that guide us in fulfilling the Great Commission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{t.about.ourStory}</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t.about.storyText}
              </p>
              <p className="text-gray-400 leading-relaxed">
                Since our founding, we have been committed to creating a welcoming environment where people can encounter God, grow in their faith, and make a difference in the world. Every Sunday, we gather to worship, learn, and encourage one another as we follow Jesus together.
              </p>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
                <div className="space-y-4">
                  {[
                    { year: '2015', text: 'Movement Church Founded' },
                    { year: '2017', text: 'First Community Outreach' },
                    { year: '2020', text: 'Launched Online Services' },
                    { year: '2024', text: 'Expanded to Multiple Locations' },
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-cyan-500/10"
                    >
                      <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-bold text-white">
                        {milestone.year}
                      </div>
                      <div className="text-gray-300">{milestone.text}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 backdrop-blur-xl"></div>
            <div className="relative p-12 text-center border border-cyan-500/20">
              <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-2xl mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">{t.about.ourVision}</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.about.ourValues}</h2>
            <p className="text-gray-300 text-lg">
              The core principles that guide everything we do
            </p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${value.gradient} rounded-xl mb-4`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.about.leadershipTeam}</h2>
            <p className="text-gray-300 text-lg">
              {t.about.meetOurPastors}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pastor John', role: 'Senior Pastor', gradient: 'from-cyan-500 to-pink-500' },
              { name: 'Pastor Sarah', role: 'Worship Pastor', gradient: 'from-pink-500 to-purple-500' },
              { name: 'Pastor David', role: 'Youth Pastor', gradient: 'from-cyan-400 to-pink-500' },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  {/* Image Placeholder */}
                  <div className={`aspect-square bg-gradient-to-br ${leader.gradient} opacity-20 flex items-center justify-center`}>
                    <Users className="w-24 h-24 text-white/50" />
                  </div>
                  {/* Content */}
                  <div className="p-6 bg-white/5 backdrop-blur-xl">
                    <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-cyan-400 font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-400 text-sm">
                      Dedicated to teaching God's Word and shepherding the flock with love and wisdom.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black via-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in fulfilling the Great Commission and making disciples of all nations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
              >
                Join Us This Sunday
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

export default About;