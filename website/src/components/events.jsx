import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { Calendar, MapPin, Clock, Users, ArrowRight, Plus } from 'lucide-react';

const Events = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      date: 'Every Sunday',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'Join us for powerful worship, inspiring messages, and fellowship.',
      attendees: '200+',
      category: 'Worship',
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Zumba with Mom',
      date: 'Every Saturday',
      time: '8:00 - 9:30 AM',
      location: 'MMC, Cnr 4th & Masotcha Ndlovhu Ave',
      description: 'Zumba, Games, Free Basic Health Checks & Healthier Living Tips',
      attendees: '50+',
      category: 'Community',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Youth Night',
      date: 'March 15, 2025',
      time: '6:00 PM',
      location: 'Youth Center',
      description: 'An evening of worship, games, and teaching designed for young people.',
      attendees: '80+',
      category: 'Youth',
      gradient: 'from-cyan-400 to-pink-500',
    },
    {
      id: 4,
      title: 'Prayer & Fasting',
      date: 'March 20-22, 2025',
      time: 'All Day',
      location: 'Church Campus',
      description: 'Three days of corporate prayer and fasting for spiritual breakthrough.',
      attendees: '150+',
      category: 'Prayer',
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      id: 5,
      title: 'Community Outreach',
      date: 'March 25, 2025',
      time: '9:00 AM',
      location: 'Parktown Community',
      description: 'Serving our community with love through practical acts of kindness.',
      attendees: '100+',
      category: 'Outreach',
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      id: 6,
      title: 'Easter Celebration',
      date: 'April 20, 2025',
      time: '10:00 AM',
      location: 'Main Sanctuary',
      description: 'Celebrate the resurrection of Jesus Christ with special music and message.',
      attendees: '300+',
      category: 'Special',
      gradient: 'from-pink-500 to-cyan-400',
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
              <span className="text-cyan-400 text-sm font-medium">{t.events.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.events.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect, grow, and serve together at our upcoming events and gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-pink-600/90 backdrop-blur-xl"></div>
            <div className="relative grid md:grid-cols-2 gap-8 p-12">
              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-white text-sm font-bold">FEATURED EVENT</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Zumba with Mom
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Every Saturday morning! Join us for Zumba, Games, Free Basic Health Checks & Healthier Living Tips. A fun way to stay healthy and connect with other moms in our community.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-white">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">Every Saturday</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">8:00 - 9:30 AM</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">MMC, Cnr 4th & Masotcha Ndlovhu Ave</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>{t.events.register}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Visual */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
                  <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/30">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-2">50+</div>
                      <div className="text-white text-lg">Expected Attendees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t.events.upcoming}</h2>
            <p className="text-gray-400 text-lg">
              Mark your calendar for these amazing events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative h-full flex flex-col bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all overflow-hidden">
                  {/* Header with Gradient */}
                  <div className={`p-6 bg-gradient-to-r ${event.gradient}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-white text-xs font-bold">{event.category}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-white">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-semibold">{event.attendees}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <p className="text-gray-400 mb-6 line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {t.events.register}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-6 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-3xl mb-6">
              <Calendar className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              View Full Event Calendar
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See all upcoming events, services, and special gatherings in one place.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Open Calendar</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black via-cyan-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-cyan-600/20 backdrop-blur-xl"></div>
            <div className="relative p-12 text-center border border-cyan-500/20">
              <Plus className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Host an Event
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have an idea for an event? We'd love to hear from you and help make it happen!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
              >
                Submit Event Idea
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;