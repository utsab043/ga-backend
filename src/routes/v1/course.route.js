const express = require('express');

const router = express.Router();

const courseController = require('../../controllers/course.controller');

router.route('/').post(courseController.createCourse).get(courseController.getAllCourses);

router.route('/:courseId').get(courseController.getCourse).patch(courseController.updateCourse).delete(courseController.deleteCourse);

module.exports = router;