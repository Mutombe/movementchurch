import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  Play, 
  Calendar, 
  User, 
  Clock, 
  Search, 
  Filter,
  ArrowRight,
  Youtube,
  Download,
  Share2,
  BookOpen,
  Heart,
  ExternalLink
} from 'lucide-react';

const Sermons = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sermons = [
    {
      id: 1,
      title: 'Living Saved And Single',
      speaker: 'Pastor Legacy Family',
      date: 'February 16, 2025',
      duration: '45 min',
      category: 'Relationships',
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      series: 'Legacy Family',
      description: 'Singleness is not a sentence-it\'s a season with purpose! Whether you\'re single, dating, or single again, this message will challenge and encourage you to trust God fully.',
    },
    {
      id: 2,
      title: 'Goals For Singles And Vitamins For Marriage',
      speaker: 'Pastor Jackin Lungiwedu',
      date: 'February 10, 2025',
      duration: '52 min',
      category: 'Relationships',
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      series: 'Marriage Series',
      description: 'What goals are you pursuing that God has a bigger plan for you in this message. Pastor Jackin Lungiwedu unpacks Biblical principles for healthy relationships.',
    },
    {
      id: 3,
      title: 'Mentalities Of A Legacy Family',
      speaker: 'Pastor Jonathan McDonald',
      date: 'February 5, 2025',
      duration: '48 min',
      category: 'Family',
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      series: 'Legacy Family',
      description: 'What kind of legacy are you building? In this powerful message, we\'re challenged to adopt a family mentality that honors God.',
    },
    {
      id: 4,
      title: 'Just Like Melchizedek',
      speaker: 'Pastor Meyer Brown',
      date: 'January 28, 2025',
      duration: '55 min',
      category: 'Faith',
      thumbnail: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      series: 'Character Studies',
      description: 'Moses understood the stature of our church. Based on the life and role of Melchizedek, this powerful message explores priesthood and purpose.',
    },
    {
      id: 5,
      title: 'The Power of Prayer',
      speaker: 'Pastor Sarah Williams',
      date: 'January 20, 2025',
      duration: '42 min',
      category: 'Prayer',
      thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      series: 'Spiritual Disciplines',
      description: 'Discover how prayer transforms not just circumstances, but hearts. Learn practical ways to deepen your prayer life.',
    },
    {
      id: 6,
      title: 'Worship in Spirit and Truth',
      speaker: 'Pastor David Chen',
      date: 'January 15, 2025',
      duration: '38 min',
      category: 'Worship',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
      videoId: 'dQw4w9WgXcQ',
      series: 'Spiritual Disciplines',
      description: 'True worship goes beyond music. Explore what it means to worship God with authenticity and passion.',
    },
  ];

  const series = [
    {
      id: 1,
      title: 'Legacy Family',
      pastor: 'Pastor Jonathan McDonald',
      description: 'A life-changing sermon series designed to strengthen families and inspire them to follow after God. Each week, we\'ll explore key aspects of building a family legacy rooted in faith.',
      episodes: 3,
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      sermons: [
        { title: 'Mentalities Of A Legacy Family', pastor: 'Pastor Jonathan McDonald' },
        { title: 'Goals For Singles And Vitamins For Marriage', pastor: 'Pastor Jackin Lungiwedu' },
        { title: 'Living Saved And Single', pastor: 'Pastor Legacy Family' }
      ]
    },
    {
      id: 2,
      title: 'Royal Priest of God',
      pastor: 'Various Speakers',
      description: 'Understanding our identity as royal priests and what it means to live in that calling every day.',
      episodes: 4,
      thumbnail: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80',
    },
    {
      id: 3,
      title: 'The Power of the Seed',
      pastor: 'Senior Pastor',
      description: 'Exploring the kingdom principle of sowing and reaping, and how small seeds of faith produce incredible harvest.',
      episodes: 5,
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    },
  ];

  const categories = ['all', 'Relationships', 'Family', 'Faith', 'Worship', 'Prayer'];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sermon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&q=80" 
            alt="Worship" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-cyan-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-sm mb-6">
                <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">{t.sermons.subtitle}</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
                {t.sermons.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                Watch and listen to powerful messages that will transform your life and deepen your faith.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold flex items-center gap-2 shadow-2xl"
                >
                  <Play className="w-5 h-5" />
                  Watch Latest
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-sm font-bold hover:bg-white/20 transition-all"
                >
                  Browse All
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Message - Featured */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-4xl font-bold text-white">Latest Message</h2>
            </div>
            <p className="text-gray-400 text-lg">Most recent message from our services</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Video Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl"></div>
              <div className="relative overflow-hidden rounded-sm border border-cyan-500/20">
                <div className="aspect-video relative">
                  <img 
                    src={sermons[0].thumbnail}
                    alt={sermons[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-8 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm cursor-pointer shadow-2xl"
                    >
                      <Play className="w-12 h-12 text-white" fill="white" />
                    </motion.div>
                  </div>

                  {/* Series Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                    <span className="text-white text-sm font-bold">{sermons[0].series}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-sm">
                    <span className="text-pink-400 text-xs font-semibold uppercase">Latest</span>
                  </div>
                  <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-sm">
                    <span className="text-cyan-400 text-xs font-semibold">{sermons[0].category}</span>
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {sermons[0].title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {sermons[0].description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-400" />
                    <span>{sermons[0].speaker}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-pink-400" />
                    <span>{sermons[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span>{sermons[0].duration}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-semibold flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Watch
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-cyan-500/30 text-white rounded-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-cyan-500/30 text-white rounded-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black sticky top-20 z-20 backdrop-blur-xl bg-black/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sermons, speakers, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-4 rounded-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 backdrop-blur-sm border border-cyan-500/20 text-gray-300 hover:bg-white/10 hover:border-cyan-500/40'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Messages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
                <h2 className="text-4xl font-bold text-white">Recent Messages</h2>
              </div>
              <p className="text-gray-400 text-lg">Browse our sermon library</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSermons.slice(1).map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all bg-white/5 backdrop-blur-xl">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-5 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm"
                      >
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </motion.div>
                    </div>

                    {/* Series Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                      <span className="text-white text-xs font-bold">{sermon.series}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-sm flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-semibold">{sermon.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-sm inline-block mb-3">
                      <span className="text-pink-400 text-xs font-semibold">{sermon.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {sermon.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {sermon.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-cyan-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-300 font-medium">{sermon.speaker}</p>
                          <p className="text-xs text-gray-500">{sermon.date}</p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/5 backdrop-blur-sm border-2 border-cyan-500/30 text-white rounded-sm font-bold hover:bg-white/10 hover:border-cyan-500/50 transition-all inline-flex items-center gap-2"
            >
              <span>Browse All Messages</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Current Series Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-4xl font-bold text-white">Current Series</h2>
            </div>
            <p className="text-gray-400 text-lg">Dive deeper with our ongoing sermon series</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Featured Series */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl"></div>
              <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
                {/* Series Image */}
                <div className="relative h-96">
                  <img 
                    src={series[0].thumbnail}
                    alt={series[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-sm inline-block mb-4">
                      <span className="text-white text-sm font-bold">Pt. {series[0].episodes}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{series[0].title}</h3>
                    <p className="text-gray-300 mb-4">{series[0].pastor}</p>
                  </div>
                </div>

                {/* Series Info */}
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {series[0].description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold flex items-center justify-center gap-2"
                  >
                    <span>View Full Series</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Series Episodes */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {series[0].sermons.map((episode, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Pt {index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{episode.title}</h4>
                      <p className="text-gray-400 text-sm">{episode.pastor}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      <Play className="w-5 h-5 text-cyan-400" fill="currentColor" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Previous Series */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
                <h2 className="text-4xl font-bold text-white">Previous Series</h2>
              </div>
              <p className="text-gray-400 text-lg">Explore past sermon series</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all bg-white/5 backdrop-blur-xl">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                    
                    {/* Episodes Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                      <span className="text-white text-sm font-bold">{item.episodes} Episodes</span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <div className="p-5 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.pastor}</span>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80" 
            alt="Subscribe" 
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm mb-8">
              <Youtube className="w-5 h-5 text-red-500" />
              <span className="text-white font-medium">Subscribe on YouTube</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Never Miss a Message
            </h2>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Subscribe to our YouTube channel and get notified when we upload new sermons. Join thousands growing in faith together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-sm font-bold text-lg shadow-2xl shadow-red-500/50 flex items-center gap-3"
              >
                <Youtube className="w-6 h-6" />
                Subscribe on YouTube
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-sm font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
              >
                <Heart className="w-6 h-6" />
                Save Favorites
              </motion.button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center justify-center gap-8 text-gray-300"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm">Sermons</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1M+</div>
                <div className="text-sm">Views</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;