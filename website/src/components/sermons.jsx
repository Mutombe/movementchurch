import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { Play, Calendar, User, Clock, Search, Filter } from 'lucide-react';

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
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      series: 'Legacy Family',
    },
    {
      id: 2,
      title: 'Goals For Singles And Vitamins For Marriage',
      speaker: 'Pastor Jackin Lungiwedu',
      date: 'February 10, 2025',
      duration: '52 min',
      category: 'Relationships',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      series: 'Marriage Series',
    },
    {
      id: 3,
      title: 'Mentalities Of A Legacy Family',
      speaker: 'Pastor Jonathan McDonald',
      date: 'February 5, 2025',
      duration: '48 min',
      category: 'Family',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      series: 'Legacy Family',
    },
    {
      id: 4,
      title: 'Just Like Melchizedek',
      speaker: 'Pastor Meyer Brown',
      date: 'January 28, 2025',
      duration: '55 min',
      category: 'Faith',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      videoId: 'dQw4w9WgXcQ',
      series: 'Character Studies',
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
              <span className="text-pink-400 text-sm font-medium">{t.sermons.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.sermons.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch and listen to powerful messages that will transform your life and deepen your faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Sermon Video */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{t.sermons.latest}</h2>
            <p className="text-gray-400">Most recent message from our services</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
              {/* Video Player */}
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex p-6 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white text-lg font-semibold">{sermons[0].title}</p>
                  <p className="text-gray-400">{sermons[0].speaker}</p>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 border-t border-cyan-500/10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{sermons[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span>{sermons[0].speaker}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{sermons[0].duration}</span>
                  </div>
                  <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                    <span className="text-cyan-400 text-xs font-medium">{sermons[0].series}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/5 border border-cyan-500/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{t.sermons.allSermons}</h2>
            <p className="text-gray-400">Browse our complete sermon library</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all bg-white/5 backdrop-blur-xl">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                    <div className="relative z-10">
                      <div className="p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    {/* Series Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full">
                      <span className="text-white text-xs font-bold">{sermon.series}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{sermon.speaker}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{sermon.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {filteredSermons.length > 6 && (
            <div className="mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg"
              >
                Load More Sermons
              </motion.button>
            </div>
          )}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss a Message
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our YouTube channel to get notified when we upload new sermons.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-semibold shadow-lg inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Subscribe on YouTube</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;