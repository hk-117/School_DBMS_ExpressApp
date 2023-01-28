const express = require('express');

const schoolController = require('../controllers/student-controller');

const router = express.Router();

router.get('/studentinfo',schoolController.studentInfo);
router.post('/studentinfo',schoolController.studentInfoPost);
router.get('/students/:id',schoolController.studentInfoByID);
router.get('/students',schoolController.studentList);

module.exports = router;