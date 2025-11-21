import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  Check, 
  DollarSign,
  TrendingUp,
  Users,
  Home,
  Globe,
  Shield,
  Lock,
  ArrowRight,
  Building
} from 'lucide-react';
import { GiWorld } from "react-icons/gi";
import { toast } from 'sonner';
import { LiaPeopleCarrySolid } from "react-icons/lia";


const Give = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const predefinedAmounts = [10, 25, 50, 100, 250, 500];

  const impactAreas = [
    {
      icon: GiWorld,
      title: 'Spread the Gospel',
      description: 'Support evangelism, missions, and global outreach initiatives',
      percentage: 35,
      gradient: 'from-cyan-500 to-pink-500',
    },
    {
      icon: LiaPeopleCarrySolid,
      title: 'Serve the Community',
      description: 'Help those in need through food banks, counseling, and support',
      percentage: 30,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      icon: Building,
      title: 'Build the Church',
      description: 'Grow ministries, maintain facilities, and expand our reach',
      percentage: 25,
      gradient: 'from-cyan-400 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Care & Compassion',
      description: 'Provide assistance to struggling families and individuals',
      percentage: 10,
      gradient: 'from-pink-600 to-purple-600',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your generous gift!');
  };

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
            <div className="inline-flex p-6 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-8">
              <Heart className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 leading-none">
              {t.give.title}
            </h1>

            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              {t.give.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="font-medium">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-pink-400" />
                <span className="font-medium">Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span className="font-medium">Tax Deductible</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Your Impact in 2024</h2>
            <p className="text-gray-400 text-xl">See how your generosity is changing lives</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '$2.5M', label: 'Total Given', icon: DollarSign },
              { number: '3,200+', label: 'Lives Changed', icon: LiaPeopleCarrySolid },
              { number: '52', label: 'Programs Funded', icon: TrendingUp },
              { number: '15', label: 'Countries Reached', icon: GiWorld },
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

          {/* Impact Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${area.gradient} rounded-sm`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-400">{area.description}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Budget Allocation</span>
                      <span className="text-white font-bold">{area.percentage}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-sm overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${area.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${area.gradient} rounded-sm`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Give Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Make Your Gift</h2>
            <p className="text-gray-400 text-xl">Every gift makes a difference in someone's life</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-pink-600/30 rounded-sm blur-3xl"></div>
            
            <div className="relative p-10 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Frequency Selection */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    Giving Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`py-4 rounded-sm font-semibold transition-all ${
                        frequency === 'one-time'
                          ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-white/5 border-2 border-cyan-500/20 text-gray-300 hover:bg-white/10 hover:border-cyan-500/40'
                      }`}
                    >
                      {t.give.oneTimeGift}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setFrequency('recurring')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`py-4 rounded-sm font-semibold transition-all ${
                        frequency === 'recurring'
                          ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-white/5 border-2 border-cyan-500/20 text-gray-300 hover:bg-white/10 hover:border-cyan-500/40'
                      }`}
                    >
                      {t.give.recurringGift}
                    </motion.button>
                  </div>
                </div>

                {/* Predefined Amounts */}
                <div>
                  <label className="block text-lg font-semibold text-white mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {predefinedAmounts.map((amt) => (
                      <motion.button
                        key={amt}
                        type="button"
                        onClick={() => setAmount(amt.toString())}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`py-4 rounded-sm font-bold text-lg transition-all ${
                          amount === amt.toString()
                            ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/30'
                            : 'bg-white/5 border-2 border-cyan-500/20 text-gray-300 hover:bg-white/10 hover:border-cyan-500/40'
                        }`}
                      >
                        ${amt}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="amount" className="block text-lg font-semibold text-white mb-4">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-16 pr-6 py-5 bg-black/50 border-2 border-cyan-500/20 rounded-sm text-white text-xl placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Impact Preview */}
                {amount && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-semibold">Your Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      A ${amount} donation could provide meals for 10 families, support a child's education for a month, or fund a mission trip.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-10 py-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-sm font-bold text-xl shadow-2xl shadow-cyan-500/50 flex items-center justify-center gap-3"
                >
                  <span>{t.give.giveNow}</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>

                <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>Secure donation processing with industry-leading encryption</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">{t.give.otherWays}</h2>
            <p className="text-gray-400 text-xl">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: t.give.bankTransfer,
                description: 'Direct bank transfer or check',
                details: 'Contact us for banking details and mailing address',
                gradient: 'from-cyan-500 to-pink-500',
              },
              {
                icon: Smartphone,
                title: t.give.ecocash,
                description: 'Mobile money transfer',
                details: t.give.contactUs,
                gradient: 'from-pink-500 to-purple-500',
              },
              {
                icon: Banknote,
                title: t.give.cash,
                description: 'Give during service',
                details: 'Drop your offering in the collection boxes at church',
                gradient: 'from-cyan-400 to-pink-500',
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-sm hover:border-cyan-500/40 transition-all">
                  <div className={`inline-flex p-5 bg-gradient-to-br ${method.gradient} rounded-sm mb-6`}>
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-400 mb-4 text-lg">{method.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{method.details}</p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 text-cyan-400 font-semibold flex items-center gap-2 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why We Give</h2>
            <p className="text-gray-400 text-xl">Hear from our generous community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'David & Jennifer Miller',
                quote: 'Giving to Movement Church has been one of the most rewarding decisions we\'ve made as a family. We\'ve seen firsthand how our contributions help change lives.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
                years: '5 years',
              },
              {
                name: 'Marcus Thompson',
                quote: 'I started with a small monthly gift, and watching the impact grow has been incredible. It\'s not about the amount, it\'s about consistency and faith.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                years: '3 years',
              },
              {
                name: 'Grace Chen',
                quote: 'Supporting the church\'s mission work has connected me to something bigger than myself. I love seeing how God multiplies our gifts.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
                years: '7 years',
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 object-cover rounded-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 p-1.5 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm">
                        <Heart className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold mb-1">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">Giving for {testimonial.years}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black via-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-6 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-sm mb-8">
              <Check className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Thank You for Your Generosity
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
              Your giving enables us to fulfill the Great Commission and make a lasting impact in our community and beyond. Every gift matters.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Give;