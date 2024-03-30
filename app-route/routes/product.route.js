import ex from 'express'
import { deleteData, findAll, findById, insertData, searchProds, updateData } from '../controller/product.controller.js';

const productroute = ex.Router();

productroute.get('/product',(req,res)=>{
    res.send('product list');
});

productroute.put('/product',insertData);
productroute.patch('/product',updateData);
productroute.delete('/product',deleteData);

productroute.get('/product/:id',findById);
productroute.get('/allproducts',findAll);

productroute.post('/product',searchProds);


export default productroute;