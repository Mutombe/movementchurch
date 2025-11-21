import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  BookOpen, 
  Download, 
  Headphones, 
  Video, 
  FileText, 
  Music, 
  ArrowRight,
  Search,
  Filter,
  Play,
  Eye,
  Heart,
  Share2,
  Clock,
  CheckCircle
} from 'lucide-react';

const Resources = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Complete Bible Study Guide',
      description: 'Comprehensive study materials covering all 66 books of the Bible with questions and reflections',
      category: 'Study Guides',
      type: 'PDF',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      downloads: 1250,
      gradient: 'from-cyan-500 to-pink-500',
      featured: true,
    },
    {
      id: 2,
      title: 'Prayer & Fasting Guide',
      description: 'A 21-day journey to deepen your relationship with God through prayer and fasting',
      category: 'Devotionals',
      type: 'PDF',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
      downloads: 890,
      gradient: 'from-pink-500 to-purple-500',
      featured: true,
    },
    {
      id: 3,
      title: 'Worship Sessions Podcast',
      description: 'Weekly podcast featuring worship music, teaching, and interviews with worship leaders',
      category: 'Podcasts',
      type: 'Audio',
      icon: Headphones,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
      downloads: 2100,
      gradient: 'from-cyan-400 to-pink-500',
    },
    {
      id: 4,
      title: 'Sermon Notes Template',
      description: 'Beautiful templates to help you take notes during sermons and apply God\'s Word',
      category: 'Templates',
      type: 'PDF',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80',
      downloads: 650,
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      id: 5,
      title: 'Marriage Enrichment Series',
      description: '8-week video series on building strong, Christ-centered marriages',
      category: 'Video Series',
      type: 'Video',
      icon: Video,
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      downloads: 430,
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      id: 6,
      title: 'Worship Playlist',
      description: 'Curated collection of our favorite worship songs for your personal devotion',
      category: 'Music',
      type: 'Audio',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      downloads: 1800,
      gradient: 'from-pink-500 to-cyan-400',
    },
    {
      id: 7,
      title: 'Small Group Leader Guide',
      description: 'Everything you need to lead an effective small group ministry',
      category: 'Study Guides',
      type: 'PDF',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
      downloads: 520,
      gradient: 'from-cyan-600 to-pink-600',
    },
    {
      id: 8,
      title: 'Youth Ministry Toolkit',
      description: 'Games, icebreakers, and teaching materials for youth leaders',
      category: 'Templates',
      type: 'PDF',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?w=800&q=80',
      downloads: 380,
      gradient: 'from-pink-600 to-purple-500',
    },
  ];

  const categories = ['all', 'Study Guides', 'Devotionals', 'Podcasts', 'Video Series', 'Music', 'Templates'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-sm blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-sm blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-sm mb-8">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Free Resources</span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 leading-none">
              Resources
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Free study guides, devotionals, podcasts, and tools to help you grow in your faith journey.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold flex items-center gap-2 shadow-2xl"
              >
                <Download className="w-5 h-5" />
                Browse All
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-sm font-bold hover:bg-white/20 transition-all"
              >
                Request a Resource
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-5xl font-bold text-white">Featured Resources</h2>
            </div>
            <p className="text-gray-400 text-xl">Most popular downloads this month</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Type Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                      <span className="text-white text-sm font-bold">{resource.type}</span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-pink-500/90 backdrop-blur-sm rounded-sm flex items-center gap-2">
                      <Heart className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">Featured</span>
                    </div>

                    {/* Downloads Count */}
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-sm flex items-center gap-2">
                      <Download className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">{resource.downloads} downloads</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-6 right-6 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-sm hover:bg-white/30 transition-all"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-sm hover:bg-white/30 transition-all"
                      >
                        <Share2 className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${resource.gradient} rounded-sm`}>
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-sm">
                        <span className="text-cyan-400 text-xs font-semibold">{resource.category}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Now</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black sticky top-20 z-20 backdrop-blur-xl bg-black/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
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

      {/* All Resources Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-5xl font-bold text-white">All Resources</h2>
            </div>
            <p className="text-gray-400 text-xl">Browse our complete library</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 p-3 bg-gradient-to-br ${resource.gradient} rounded-sm`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                      <span className="text-white text-xs font-bold">{resource.type}</span>
                    </div>

                    {/* Downloads */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-sm flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-bold">{resource.downloads}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-sm inline-block mb-3">
                      <span className="text-cyan-400 text-xs font-semibold">{resource.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-cyan-400 font-semibold flex items-center gap-2 group/btn"
                    >
                      <span>Download</span>
                      <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                    </motion.button>
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
              <span>Load More Resources</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100+', label: 'Total Resources', icon: BookOpen },
              { number: '25K+', label: 'Downloads', icon: Download },
              { number: '50+', label: 'Study Guides', icon: FileText },
              { number: '12', label: 'Podcast Series', icon: Headphones },
            ].map((stat, index) => (
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

      {/* Subscribe Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80" 
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
            <div className="inline-flex p-6 bg-white/10 backdrop-blur-md rounded-sm mb-8">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Get New Resources Weekly
            </h2>

            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Subscribe to receive the latest study guides, devotionals, and teaching materials delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-sm text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold shadow-2xl shadow-cyan-500/50 whitespace-nowrap"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;