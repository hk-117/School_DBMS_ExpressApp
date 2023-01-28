const express = require('express');

const schoolController = require('../controllers/teacher-controller');

const router = express.Router();

router.get('/teachers/:id',schoolController.teacherInfoByID);
router.get('/teachers',schoolController.teacherList);
router.get('/teacherinfo',schoolController.teacherInfo);
router.post('/teacherinfo',schoolController.teacherInfoPost);

module.exports = router;