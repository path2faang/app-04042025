import React, { useState } from 'react';
import { addCourse } from '../api/academic';
import { toast } from 'sonner';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({ courseCode: '', courseName: '' });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse(courseData);
      toast.success('Course added successfully');
    } catch (error) {
      toast.error('Error adding course');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Course Code</label>
          <input
            type="text"
            name="courseCode"
            value={courseData.courseCode}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Course Name</label>
          <input
            type="text"
            name="courseName"
            value={courseData.courseName}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;