const { Course, Curriculum, ClassSchedule } = require('./model');

// Implement service functions (e.g., createCourse, createCurriculum, etc.)
const createCourse = async (courseData) => {
  const course = new Course(courseData);
  return await course.save();
};

// Additional functions for Curriculum and ClassSchedule management

module.exports = {
  createCourse,
};