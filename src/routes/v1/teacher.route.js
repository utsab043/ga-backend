const express = require('express');

const router = express.Router();
const teacherController = require('../../controllers/teacher.controller');

router.route('/').post(teacherController.createTeacher).get(teacherController.getAllTeachers);

router.route('/:teacherId').get(teacherController.getTeacher).patch(teacherController.updateTeacher).delete(teacherController.deleteTeacher);

module.exports = router;