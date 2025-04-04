const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
    unique: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  curriculum: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Curriculum'
  }],
});

const CurriculumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
});

const ClassScheduleSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  }
});

module.exports = {
  Course: mongoose.model('Course', CourseSchema),
  Curriculum: mongoose.model('Curriculum', CurriculumSchema),
  ClassSchedule: mongoose.model('ClassSchedule', ClassScheduleSchema),
};