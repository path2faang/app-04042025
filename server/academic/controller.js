const { createCourse } = require('./service');

const addCourse = async (req, res) => {
  try {
    const course = await createCourse(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addCourse,
};