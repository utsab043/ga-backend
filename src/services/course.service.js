const httpStatus = require('http-status');
const { Course } = require('../models');
const ApiError = require('../utils/ApiError');

const createCourse = async (courseBody) => {
    return Course.create(courseBody);
}

const getCourseById = async (id) => {
    return Course.findById(id);
}
const getAllCourses = async () => {
    return Course.find();
}
const updateCourseById = async (courseId, updateBody) => {
    const course = await getCourseById(courseId);
    if (!course) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
    }
    Object.assign(course, updateBody);
    await course.save();
    return course;
}

const deleteCourseById = async (courseId) => {
    const course = await getCourseById(courseId);
    if (!course) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
    }
    await course.remove();
    return course;
}

module.exports = {
    createCourse,
    getCourseById,
    updateCourseById,
    deleteCourseById,
    getAllCourses
};
