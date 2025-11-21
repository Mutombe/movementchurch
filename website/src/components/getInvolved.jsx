import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  UserPlus, 
  Users, 
  Droplet, 
  Heart, 
  Handshake, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { GiWorld } from "react-icons/gi";
import { LiaPeopleCarrySolid } from "react-icons/lia";

const GetInvolved = () => {
  const { t } = useLanguage();

  const opportunities = [
    {
      icon: Handshake,
      title: t.getInvolved.volunteer,
      description: t.getInvolved.volunteerText,
      cta: t.getInvolved.signUp,
      gradient: 'from-yellow-500 to-red-600',
      features: ['Flexible Schedule', 'Training Provided', 'Make an Impact', 'Meet New People'],
    },
    {
      icon: LiaPeopleCarrySolid,
      title: t.getInvolved.smallGroups,
      description: t.getInvolved.smallGroupsText,
      cta: t.getInvolved.learnMore,
      gradient: 'from-red-500 to-yellow-500',
      features: ['Weekly Meetings', 'Biblical Study', 'Close Fellowship', 'Prayer Support'],
    },
    {
      icon: Droplet,
      title: t.getInvolved.baptism,
      description: t.getInvolved.baptismText,
      cta: t.getInvolved.signUp,
      gradient: 'from-yellow-400 to-red-500',
      features: ['Next Step', 'Public Declaration', 'Celebrate Faith', 'Join Others'],
    },
    {
      icon: Heart,
      title: t.getInvolved.membership,
      description: t.getInvolved.membershipText,
      cta: t.getInvolved.learnMore,
      gradient: 'from-red-600 to-yellow-600',
      features: ['Belong', 'Commit', 'Serve', 'Grow Together'],
    },
    {
      icon: UserPlus,
      title: t.getInvolved.serveTeam,
      description: 'Use your gifts in worship, tech, hospitality, and more.',
      cta: t.getInvolved.signUp,
      gradient: 'from-yellow-500 to-red-500',
      features: ['Multiple Teams', 'Use Your Gifts', 'Build Skills', 'Serve Weekly'],
    },
    {
      icon: GiWorld,
      title: t.getInvolved.missions,
      description: 'Experience missions firsthand and share God\'s love globally.',
      cta: t.getInvolved.learnMore,
      gradient: 'from-red-500 to-yellow-400',
      features: ['Global Impact', 'Team Travel', 'Life-Changing', 'Support Included'],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/20 via-black to-red-950/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-sm mb-6">
              <span className="text-red-400 text-sm font-medium">{t.getInvolved.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.getInvolved.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your place in the Movement Church family and make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Opportunity */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-red-600/90 backdrop-blur-xl"></div>
            <div className="relative grid md:grid-cols-2 gap-8 p-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-sm mb-4">
                  <span className="text-white text-sm font-bold">START HERE</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  New to Movement Church?
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  We'd love to meet you! Join us for a New Members Class where you'll learn about our church, meet the team, and discover how you can get connected.
                </p>
                <div className="space-y-3 mb-8">
                  {['Learn Our Story', 'Meet the Team', 'Find Your Place', 'Get Connected'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-red-600 rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>Register for Next Class</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Visual */}
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-sm blur-2xl"></div>
                  <div className="relative p-12 bg-white/10 backdrop-blur-sm rounded-sm border-4 border-white/30">
                    <LiaPeopleCarrySolid className="w-32 h-32 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ways to Get Involved</h2>
            <p className="text-gray-400 text-lg">
              Choose what fits your season and calling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-red-600/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative h-full flex flex-col bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-sm hover:border-yellow-500/40 transition-all overflow-hidden">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${opportunity.gradient}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-sm">
                        <opportunity.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{opportunity.title}</h3>
                    <p className="text-white/90">{opportunity.description}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 p-6">
                    <div className="space-y-2 mb-6">
                      {opportunity.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-sm"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-sm font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                    >
                      <span>{opportunity.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Your Next Steps</h2>
            <p className="text-gray-400 text-lg">
              Here's how to begin your journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Visit', description: 'Join us on Sunday' },
              { step: '2', title: 'Connect', description: 'Meet our team' },
              { step: '3', title: 'Discover', description: 'Find your place' },
              { step: '4', title: 'Serve', description: 'Make an impact' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-500 to-red-600 opacity-30"></div>
                )}
                <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-sm text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-600 rounded-sm mb-4 text-2xl font-bold text-white">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black via-yellow-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UserPlus className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's connect and help you find your place in the Movement Church family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-sm font-semibold shadow-lg"
              >
                Contact Us Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-yellow-500/50 text-white rounded-sm font-semibold hover:bg-white/20 transition-all"
              >
                Download Info Packet
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;