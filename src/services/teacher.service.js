const httpStatus = require('http-status');
const { Teacher } = require('../models');
const ApiError = require('../utils/ApiError');

const createTeacher = async (teacherBody) => {
    return Teacher.create(teacherBody);
}

const getTeacherById = async (id) => {
    return Teacher.findById(id);
}
const getAllTeachers = async () => {
    return Teacher.find();
}
const updateTeacherById = async (teacherId, updateBody) => {
    const teacher = await getTeacherById(teacherId);
    if (!teacher) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found');
    }
    Object.assign(teacher, updateBody);
    await teacher.save();
    return teacher;
}

const deleteTeacherById = async (teacherId) => {
    const teacher = await getTeacherById(teacherId);
    if (!teacher) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found');
    }
    await teacher.remove();
    return teacher;
}

module.exports = {
    createTeacher,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById,
    getAllTeachers
};
