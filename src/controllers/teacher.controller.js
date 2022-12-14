const httpStatus = require('http-status');
const pick = require('../utils/pick');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { teacherService } = require('../services');

const createTeacher = catchAsync(async (req, res) => {
    const teacher = await teacherService.createTeacher(req.body);
    res.status(httpStatus.CREATED).send(teacher);
});

const getTeacher = catchAsync(async (req, res) => {
    const teacher = await teacherService.getTeacherById(req.params.teacherId);
    if (!teacher) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found');
    }
    res.send(teacher);
});

const getAllTeachers = catchAsync(async (req, res) => {
    res.send(await teacherService.getAllTeachers());
});

const updateTeacher = catchAsync(async (req, res) => {
    const teacher = await teacherService.updateTeacherById(req.params.teacherId, req.body);
    res.send(teacher);
});

const deleteTeacher = catchAsync(async (req, res) => {
    await teacherService.deleteTeacherById(req.params.teacherId);
    res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
    createTeacher,
    getTeacher,
    updateTeacher,
    deleteTeacher,
    getAllTeachers,
};