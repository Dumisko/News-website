const express = require('express');
const router = express.Router();
const { getAllNews, getNewsById, getNewsByType, getNewsByTypeId } = require('../controllers/newsController');

router.get('/', getAllNews);
router.get('/:id', getNewsById);
router.get('/type/:type', getNewsByType);
router.get("/type/:type/:id", getNewsByTypeId);

module.exports = router;
