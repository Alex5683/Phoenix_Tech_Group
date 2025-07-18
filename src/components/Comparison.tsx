import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const features = [
    { feature: 'Custom Web & App Development', phoenix: true, others: true },
    { feature: 'Agile Project Management', phoenix: true, others: false },
    { feature: 'Cloud-Native Deployment', phoenix: true, others: false },
    { feature: 'Clean, Scalable Codebase', phoenix: true, others: false },
    { feature: 'Full-Stack Development Team', phoenix: true, others: false },
    { feature: 'Dedicated Project Manager', phoenix: true, others: false },
    { feature: 'End-to-End QA Testing', phoenix: true, others: true },
    { feature: 'Post-Launch Support & Monitoring', phoenix: true, others: false },
    { feature: 'Source Code Ownership', phoenix: true, others: false },
    { feature: 'Transparent Pricing & Timelines', phoenix: true, others: false }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <button className="bg-white shadow-md rounded-full px-4 py-1 text-sm font-semibold flex items-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m13 18V7a2 2 0 00-2-2h-6" />
          </svg>
          Comparison
        </button>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Phoenix Devs vs Traditional Firms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our modern development process outshines outdated agency models.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-3 bg-gray-100 p-6">
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-600">Features</span>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold text-black">Phoenix Devs</span>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-600">Others</span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors">
                <div className="text-gray-700 font-medium">{item.feature}</div>
                <div className="flex justify-center">
                  {item.phoenix ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
