import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { label: '学员总数', value: 3200, suffix: '+' },
  { label: '就业率', value: 80, suffix: '%' },
  { label: '平均薪资', value: 15000, prefix: '¥' },
  { label: '课程数量', value: 30, suffix: '+' }
];

function Stats() {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, staggerChildren: 0.2 }
        }
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient text-white rounded-2xl p-8 shadow-lg"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <div className="text-3xl font-bold mb-2 animate-float">
            {stat.prefix}
            <CountUp end={stat.value} duration={2.5} />
            {stat.suffix}
          </div>
          <div className="text-primary-100">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Stats;