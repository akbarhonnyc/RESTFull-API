const  express = require('express');
const  {loggedIn} = require('../middleware/auth');

const { getProducts, postProduct, getProduct, putProduct, deleteProduct} = require('../controllers/product');
const  router = express.Router();

router.get('/', getProducts);
router.post('/', loggedIn, postProduct);
router.get('/:prodId', getProduct);
router.put('/:prodId', loggedIn, putProduct);
router.delete('/:prodId', loggedIn, deleteProduct);


module.exports = router;