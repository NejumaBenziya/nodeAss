const express=require('express')
const obj=require('../db')
const router=express.Router()

router.get('/',(req,res)=>{
    res.status(200).json(obj.products)
})
router.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    console.log(id);
    
   for(const element of obj.products){
       
        if(element.id===id){
            console.log(element);
            
           res.status(200).json(element)
            break;
        }
    }
    
})
router.post('/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = obj.products.length ? obj.products[obj.products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
router.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = obj.products.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        products[productIndex] = { id: productId, ...req.body };
        res.json(obj.products[productIndex]);
    } else {
        res.status(404).send('Product not found');
    }
});


module.exports=router