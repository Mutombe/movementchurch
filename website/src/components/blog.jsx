import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  FileText, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
  TrendingUp,
  Eye,
  Tag
} from 'lucide-react';

const Blogs = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogs = [
    {
      id: 1,
      title: 'Finding Hope in Difficult Times',
      excerpt: 'Discover how faith can be your anchor when life gets stormy. Learn practical ways to maintain hope and trust God through challenges.',
      author: {
        name: 'Pastor John Smith',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        role: 'Senior Pastor',
      },
      date: 'February 16, 2025',
      readTime: '5 min read',
      category: 'Faith',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80',
      likes: 234,
      comments: 45,
      views: 1250,
      featured: true,
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Building Strong Christian Marriages',
      excerpt: 'Explore biblical principles for creating lasting, Christ-centered relationships that honor God and bring joy to your family.',
      author: {
        name: 'Sarah Williams',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        role: 'Marriage Counselor',
      },
      date: 'February 14, 2025',
      readTime: '8 min read',
      category: 'Relationships',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80',
      likes: 189,
      comments: 32,
      views: 980,
      featured: true,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Parenting with Purpose and Grace',
      excerpt: 'Raising children in today\'s world requires intentionality, wisdom, and God\'s grace. Here are practical tips for Christian parents.',
      author: {
        name: 'Michael Chen',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        role: 'Youth Pastor',
      },
      date: 'February 12, 2025',
      readTime: '6 min read',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80',
      likes: 156,
      comments: 28,
      views: 720,
      gradient: 'from-cyan-400 to-pink-500',
    },
    {
      id: 4,
      title: 'The Power of Corporate Prayer',
      excerpt: 'When believers come together in prayer, miracles happen. Discover the transformative power of praying as a community.',
      author: {
        name: 'Pastor John Smith',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        role: 'Senior Pastor',
      },
      date: 'February 10, 2025',
      readTime: '4 min read',
      category: 'Prayer',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80',
      likes: 267,
      comments: 51,
      views: 1450,
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      id: 5,
      title: 'Serving Your Community with Love',
      excerpt: 'Practical ways to be the hands and feet of Jesus in your neighborhood. Small acts of kindness can create big impacts.',
      author: {
        name: 'Grace Thompson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        role: 'Outreach Director',
      },
      date: 'February 8, 2025',
      readTime: '7 min read',
      category: 'Outreach',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80',
      likes: 201,
      comments: 38,
      views: 890,
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      id: 6,
      title: 'Growing in Your Walk with God',
      excerpt: 'Spiritual growth doesn\'t happen by accident. Learn daily practices that will deepen your relationship with Christ.',
      author: {
        name: 'David Martinez',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        role: 'Teaching Pastor',
      },
      date: 'February 5, 2025',
      readTime: '5 min read',
      category: 'Discipleship',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
      likes: 178,
      comments: 29,
      views: 650,
      gradient: 'from-pink-500 to-cyan-400',
    },
  ];

  const categories = ['all', 'Faith', 'Relationships', 'Family', 'Prayer', 'Outreach', 'Discipleship'];

  const trendingTopics = [
    { name: 'Prayer & Fasting', count: 12 },
    { name: 'Marriage', count: 8 },
    { name: 'Worship', count: 15 },
    { name: 'Youth Ministry', count: 6 },
    { name: 'Community', count: 10 },
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = blogs.filter(blog => blog.featured);

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
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Church Blog</span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 leading-none">
              Blog
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Stories, insights, and biblical wisdom to inspire your faith journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/5 backdrop-blur-xl border-2 border-cyan-500/20 rounded-sm text-white text-lg placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
              <h2 className="text-5xl font-bold text-white">Featured Articles</h2>
            </div>
            <p className="text-gray-400 text-xl">Must-read posts from our team</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 transition-all">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                      <span className="text-white text-sm font-bold">{blog.category}</span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-pink-500/90 backdrop-blur-sm rounded-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">Featured</span>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 left-6 flex gap-3">
                      <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-sm flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-bold">{blog.views}</span>
                      </div>
                      <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-sm flex items-center gap-1.5">
                        <Heart className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-bold">{blog.likes}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-sm hover:bg-white/30 transition-all"
                      >
                        <Bookmark className="w-5 h-5 text-white" />
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

                  {/* Content */}
                  <div className="p-8">
                    {/* Author Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={blog.author.image}
                        alt={blog.author.name}
                        className="w-12 h-12 rounded-sm border-2 border-cyan-500/30"
                      />
                      <div>
                        <div className="text-white font-bold">{blog.author.name}</div>
                        <div className="text-sm text-gray-400">{blog.author.role}</div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-6 border-t border-cyan-500/10">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageCircle className="w-4 h-4" />
                          <span>{blog.comments}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-cyan-400 font-semibold flex items-center gap-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black sticky top-20 z-20 backdrop-blur-xl bg-black/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide justify-center">
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
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-10 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-sm"></div>
                  <h2 className="text-5xl font-bold text-white">All Articles</h2>
                </div>
                <p className="text-gray-400 text-xl">Latest posts from our team</p>
              </div>

              <div className="space-y-8">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>

                    <div className="relative grid md:grid-cols-5 gap-6 p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all">
                      {/* Image */}
                      <div className="md:col-span-2 relative h-48 md:h-auto overflow-hidden rounded-sm">
                        <img 
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-cyan-500/90 backdrop-blur-sm rounded-sm">
                          <span className="text-white text-xs font-bold">{blog.category}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
                            {blog.excerpt}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {/* Author */}
                          <div className="flex items-center gap-3">
                            <img 
                              src={blog.author.image}
                              alt={blog.author.name}
                              className="w-10 h-10 rounded-sm border-2 border-cyan-500/30"
                            />
                            <div>
                              <div className="text-white font-semibold text-sm">{blog.author.name}</div>
                              <div className="text-xs text-gray-500">{blog.author.role}</div>
                            </div>
                          </div>

                          {/* Meta */}
                          <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              <span>{blog.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Eye className="w-4 h-4" />
                              <span>{blog.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm">
                      <Tag className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Trending Topics</h3>
                  </div>

                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ x: 5 }}
                        className="w-full flex items-center justify-between p-3 bg-white/5 rounded-sm hover:bg-white/10 transition-all group/topic"
                      >
                        <span className="text-white font-medium group-hover/topic:text-cyan-400 transition-colors">
                          {topic.name}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/20 rounded-sm text-cyan-400 text-sm font-bold">
                          {topic.count}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-sm blur-2xl"></div>
                
                <div className="relative p-8 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-sm">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Subscribe to Blog</h3>
                    <p className="text-gray-400">Get new articles in your inbox</p>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-sm text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold shadow-lg"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;