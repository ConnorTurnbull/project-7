const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')

const postCtrl = require('../controllers/post');

router.post('/post', multer, postCtrl.newPost);
router.get('/post', postCtrl.getPost);

module.exports = router;