var express = require('express');
const multer = require('multer');
var router = express.Router();


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'public/images/');
  },
 
  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', upload.array('multi-files'), (req, res) => {

  console.log('dwdw')
  res.redirect('/');
});

module.exports = router;
