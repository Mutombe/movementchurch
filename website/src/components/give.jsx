import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './lunguageContext';
import { Heart, CreditCard, Smartphone, Banknote, Check, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

const Give = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const predefinedAmounts = [10, 25, 50, 100, 250, 500];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your generous gift!');
  };

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
            <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-2xl mb-6">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              {t.give.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.give.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">{t.give.whyGive}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.give.whyGiveText}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Spread the Gospel', description: 'Support evangelism and missions' },
              { title: 'Serve the Community', description: 'Help those in need locally' },
              { title: 'Build the Church', description: 'Grow ministries and facilities' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all text-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Give Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Make Your Gift</h2>
                  <p className="text-gray-400">Every gift makes a difference</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Frequency Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Giving Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFrequency('one-time')}
                        className={`py-3 rounded-lg font-medium transition-all ${
                          frequency === 'one-time'
                            ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white/5 border border-cyan-500/20 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {t.give.oneTimeGift}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('recurring')}
                        className={`py-3 rounded-lg font-medium transition-all ${
                          frequency === 'recurring'
                            ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white/5 border border-cyan-500/20 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {t.give.recurringGift}
                      </button>
                    </div>
                  </div>

                  {/* Predefined Amounts */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {predefinedAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt.toString())}
                          className={`py-3 rounded-lg font-semibold transition-all ${
                            amount === amt.toString()
                              ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                              : 'bg-white/5 border border-cyan-500/20 text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    {t.give.giveNow}
                  </motion.button>

                  <p className="text-center text-sm text-gray-500">
                    Secure donation processing powered by industry-leading encryption
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black via-cyan-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t.give.otherWays}</h2>
            <p className="text-gray-400 text-lg">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: t.give.bankTransfer,
                description: 'Direct bank transfer',
                details: 'Contact us for banking details',
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
                details: 'Drop your offering in the collection',
                gradient: 'from-cyan-400 to-pink-500',
              },
            ].map((method, index) => (
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
                <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all text-center">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${method.gradient} rounded-xl mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 mb-3">{method.description}</p>
                  <p className="text-sm text-gray-500">{method.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Check className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl text-gray-300">
              Your giving enables us to fulfill the Great Commission and make a lasting impact in our community and beyond.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Give;