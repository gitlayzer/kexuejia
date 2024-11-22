import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaStar } from 'react-icons/fa';

function CourseCard({ course, onClick, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group bg-white rounded-2xl shadow-soft hover:shadow-hover card-hover overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full text-sm font-semibold flex items-center">
          <FaStar className="mr-1 text-yellow-400" />
          <span className="text-gray-800">{course.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-500">
            <FaClock className="mr-2 text-primary-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaUsers className="mr-2 text-primary-500" />
            <span>{course.students}+ 学员</span>
          </div>
        </div>
        <button
          onClick={onClick}
          className="w-full py-3 bg-gradient text-white rounded-lg transform transition-all duration-300 hover:opacity-90 hover:scale-[1.02] font-semibold"
        >
          立即咨询
        </button>
      </div>
    </motion.div>
  );
}

export default CourseCard;