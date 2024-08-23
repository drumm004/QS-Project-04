import express from 'express';
//localhost:3000/products/
const router = express.Router()
router.get("/", async (req, res) => {
    //res.send('products handled')
    res.render('products');
});
export default router;