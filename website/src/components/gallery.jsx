import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  MapPin,
  Users,
  Heart,
  Download,
  Share2,
  ZoomIn,
  Grid3x3,
  Columns,
  ArrowLeft,
  Folder,
  FolderOpen,
  Church,
  Sparkles,
  TreePine,
  BookOpen,
  Baby,
  Filter
} from 'lucide-react';
import { LiaPeopleCarrySolid } from "react-icons/lia";

const Gallery = () => {
  const [currentView, setCurrentView] = useState('folders'); // 'folders' or 'images'
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [layout, setLayout] = useState('masonry');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Define folders with beautiful styling
  const folders = [
    {
      id: "community",
      name: "Community Events",
      description: "Fellowship, gatherings, and community activities",
      icon: LiaPeopleCarrySolid,
      count: 24,
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
      cover: "/1.jpg",
    },
    {
      id: "worship",
      name: "Worship & Prayer",
      description: "Powerful moments of worship and prayer",
      icon: Church,
      count: 12,
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
      cover: "/15.jpg",
    },
    {
      id: "nature",
      name: "Nature & Creation",
      description: "God's beautiful creation captured in photos",
      icon: TreePine,
      count: 15,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
      cover: "/6.jpg",
    },
    {
      id: "leadership",
      name: "Leadership & Teaching",
      description: "Messages, teachings, and leadership moments",
      icon: BookOpen,
      count: 8,
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
      cover: "/52.jpg",
    },
  ];

  // All 54 images organized by folder
  const allImages = {
    community: [
      { id: 1, src: "/1.jpg", album: "Community", category: "Community Events" },
      { id: 2, src: "/2.jpg", album: "Community", category: "Community Events" },
      { id: 3, src: "/3.jpg", album: "Community", category: "Community Events" },
      { id: 4, src: "/4.jpg", album: "Community", category: "Community Events" },
      { id: 37, src: "/37.jpg", album: "Community", category: "Community Events" },
      { id: 38, src: "/38.jpg", album: "Community", category: "Community Events" },
      { id: 39, src: "/39.jpg", album: "Community", category: "Community Events" },
      { id: 40, src: "/40.jpg", album: "Community", category: "Community Events" },
      { id: 41, src: "/41.jpg", album: "Community", category: "Community Events" },
      { id: 42, src: "/42.jpg", album: "Community", category: "Community Events" },
      { id: 43, src: "/43.jpg", album: "Community", category: "Community Events" },
      { id: 44, src: "/44.jpg", album: "Community", category: "Community Events" },
      { id: 45, src: "/45.jpg", album: "Community", category: "Community Events" },
      { id: 46, src: "/46.jpg", album: "Community", category: "Community Events" },
      { id: 47, src: "/47.jpg", album: "Community", category: "Community Events" },
      { id: 48, src: "/48.jpg", album: "Community", category: "Community Events" },
      { id: 49, src: "/49.jpg", album: "Community", category: "Community Events" },
      { id: 50, src: "/50.jpg", album: "Community", category: "Community Events" },
      { id: 51, src: "/51.jpg", album: "Community", category: "Community Events" },
      { id: 32, src: "/32.jpg", album: "Community", category: "Community Events" },
      { id: 18, src: "/18.jpg", album: "Community", category: "Community Events" },
      { id: 25, src: "/25.jpg", album: "Community", category: "Church Activities" },
      { id: 26, src: "/26.jpg", album: "Community", category: "Church Activities" },
      { id: 31, src: "/31.jpg", album: "Community", category: "Church Activities" },
    ],
    worship: [
      { id: 15, src: "/15.jpg", album: "Worship", category: "Worship" },
      { id: 16, src: "/16.jpg", album: "Worship", category: "Worship" },
      { id: 17, src: "/17.jpg", album: "Worship", category: "Worship" },
      { id: 19, src: "/19.jpg", album: "Worship", category: "Worship" },
      { id: 20, src: "/20.jpg", album: "Worship", category: "Worship" },
      { id: 21, src: "/21.jpg", album: "Worship", category: "Worship" },
      { id: 27, src: "/27.jpg", album: "Worship", category: "Prayer" },
      { id: 28, src: "/28.jpg", album: "Worship", category: "Prayer" },
      { id: 30, src: "/30.jpg", album: "Worship", category: "Prayer" },
      { id: 5, src: "/5.jpg", album: "Worship", category: "Church Building" },
      { id: 11, src: "/11.jpg", album: "Worship", category: "Ministry" },
      { id: 54, src: "/54.jpg", album: "Worship", category: "Outreach" },
    ],
    nature: [
      { id: 6, src: "/6.jpg", album: "Nature", category: "Creation" },
      { id: 7, src: "/7.jpg", album: "Nature", category: "Creation" },
      { id: 8, src: "/8.jpg", album: "Nature", category: "Creation" },
      { id: 9, src: "/9.jpg", album: "Nature", category: "Creation" },
      { id: 10, src: "/10.jpg", album: "Nature", category: "Creation" },
      { id: 12, src: "/12.jpg", album: "Nature", category: "Creation" },
      { id: 13, src: "/13.jpg", album: "Nature", category: "Creation" },
      { id: 14, src: "/14.jpg", album: "Nature", category: "Creation" },
      { id: 22, src: "/22.jpg", album: "Nature", category: "Creation" },
      { id: 23, src: "/23.jpg", album: "Nature", category: "Creation" },
      { id: 24, src: "/24.jpg", album: "Nature", category: "Creation" },
      { id: 29, src: "/29.jpg", album: "Nature", category: "Creation" },
      { id: 33, src: "/33.jpg", album: "Nature", category: "Creation" },
      { id: 36, src: "/36.jpg", album: "Nature", category: "Creation" },
      { id: 35, src: "/35.jpg", album: "Nature", category: "Reflection" },
    ],
    leadership: [
      { id: 52, src: "/52.jpg", album: "Leadership", category: "Teaching" },
      { id: 53, src: "/53.webp", album: "Leadership", category: "Teaching" },
      { id: 34, src: "/54.webp", album: "Leadership", category: "Bible Study" },
      { id: 35, src: "/35.jpg", album: "Leadership", category: "Bible Study" },
    ],
  };

  const categories = ['all', 'Community Events', 'Worship', 'Prayer', 'Creation', 'Teaching', 'Church Activities'];

  const openFolder = (folderId) => {
    setSelectedFolder(folderId);
    setCurrentView("images");
    setSelectedCategory('all');
  };

  const backToFolders = () => {
    setCurrentView("folders");
    setSelectedFolder(null);
  };

  const getDisplayImages = () => {
    if (!selectedFolder) return [];
    const folderImages = allImages[selectedFolder] || [];
    
    if (selectedCategory === 'all') {
      return folderImages;
    }
    
    return folderImages.filter(img => img.category === selectedCategory);
  };

  const displayImages = getDisplayImages();

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              <ImageIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Photo Gallery</span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 leading-none">
              Gallery
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Capturing moments of worship, fellowship, and community impact through photos.
            </p>

            {/* Breadcrumb Navigation - Only show when in image view */}
            <AnimatePresence>
              {currentView === "images" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-3 mb-8 flex-wrap"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={backToFolders}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-sm text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Folders
                  </motion.button>

                  {/* Layout Toggle */}
                  <motion.button
                    onClick={() => setLayout('masonry')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-sm font-semibold flex items-center gap-2 transition-all ${
                      layout === 'masonry'
                        ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                        : 'bg-white/10 backdrop-blur-md border border-cyan-500/30 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                    <span className="hidden sm:inline">Masonry</span>
                  </motion.button>

                  <motion.button
                    onClick={() => setLayout('grid')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-sm font-semibold flex items-center gap-2 transition-all ${
                      layout === 'grid'
                        ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                        : 'bg-white/10 backdrop-blur-md border border-cyan-500/30 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <Columns className="w-5 h-5" />
                    <span className="hidden sm:inline">Grid</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Only show in images view */}
      {currentView === "images" && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black sticky top-20 z-20 backdrop-blur-xl bg-black/80 border-b border-cyan-500/10">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Filters */}
            <div className="hidden md:flex gap-2 overflow-x-auto scrollbar-hide justify-center">
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

            {/* Mobile Filter Icon (Far Right) */}
            <div className="md:hidden flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="p-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-sm text-white shadow-lg"
              >
                <Filter className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Mobile Filter Dropdown */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  className="md:hidden mt-4 flex flex-wrap gap-2 justify-end"
                >
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowMobileFilters(false);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-sm font-semibold text-sm whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                          : 'bg-white/5 backdrop-blur-sm border border-cyan-500/20 text-gray-300'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {currentView === "folders" ? (
              // FOLDER VIEW
              <motion.div
                key="folders"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-bold text-white text-center mb-6"
                >
                  Browse Our{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Albums
                  </span>
                </motion.h2>
                
                <p className="text-gray-400 text-xl text-center mb-16">
                  Explore our collection of memories and moments
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {folders.map((folder, index) => {
                    const IconComponent = folder.icon;
                    return (
                      <motion.div
                        key={folder.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ y: -12, scale: 1.02 }}
                        onClick={() => openFolder(folder.id)}
                        className="relative group cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

                        <div
                          className="relative overflow-hidden rounded-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                          style={{
                            background: folder.gradient,
                            minHeight: "380px",
                          }}
                        >
                          {/* Background Pattern */}
                          <div
                            className="absolute inset-0 opacity-60"
                            style={{ background: folder.bgPattern }}
                          ></div>

                          {/* Decorative Elements */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-sm blur-3xl"></div>

                          <div className="relative z-10 p-10">
                            {/* Icon */}
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-20 h-20 rounded-sm bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6"
                            >
                              <IconComponent className="w-10 h-10 text-white" />
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                              {folder.name}
                            </h3>

                            <p className="text-white/90 mb-6 leading-relaxed text-lg">
                              {folder.description}
                            </p>

                            {/* Stats */}
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-sm">
                                <ImageIcon className="w-5 h-5 text-white" />
                                <span className="text-white font-bold text-lg">{folder.count}</span>
                                <span className="text-white/90 text-sm">Photos</span>
                              </div>

                              <motion.div
                                whileHover={{ x: 5 }}
                                className="w-12 h-12 rounded-sm bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
                              >
                                <ChevronRight className="w-6 h-6 text-white" />
                              </motion.div>
                            </div>
                          </div>

                          {/* Hover Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 pointer-events-none"
                          ></motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              // IMAGE GALLERY VIEW
              <motion.div
                key="images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {displayImages.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-xl">No images found in this category</p>
                  </div>
                ) : (
                  <>
                    {/* Masonry Grid */}
                    {layout === 'masonry' && (
                      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                        {displayImages.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setLightboxImage(image)}
                            className="relative group cursor-pointer break-inside-avoid"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                            
                            <div className="relative overflow-hidden rounded-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                              <img 
                                src={image.src}
                                alt={`Gallery ${image.id}`}
                                className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                                <ZoomIn className="w-12 h-12 text-white" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Grid Layout */}
                    {layout === 'grid' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {displayImages.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setLightboxImage(image)}
                            className="relative group cursor-pointer aspect-square"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                            
                            <div className="relative w-full h-full overflow-hidden rounded-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                              <img 
                                src={image.src}
                                alt={`Gallery ${image.id}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                                <ZoomIn className="w-12 h-12 text-white" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats - Only show in folder view */}
      {currentView === "folders" && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/10 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '4', label: 'Photo Albums', icon: Folder },
                { number: '59', label: 'Total Photos', icon: ImageIcon },
                { number: '25+', label: 'Events Captured', icon: Calendar },
                { number: '500+', label: 'People Featured', icon: LiaPeopleCarrySolid },
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
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLightboxImage(null)}
              className="absolute top-8 right-8 p-4 bg-white/10 backdrop-blur-md rounded-sm hover:bg-white/20 transition-all z-10"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <div className="absolute top-8 left-8 flex gap-3 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white/10 backdrop-blur-md rounded-sm hover:bg-white/20 transition-all"
              >
                <Download className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white/10 backdrop-blur-md rounded-sm hover:bg-white/20 transition-all"
              >
                <Share2 className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh]"
            >
              <img 
                src={lightboxImage.src}
                alt="Gallery"
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md rounded-sm hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md rounded-sm hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;