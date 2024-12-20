const express=require('express')
const obj=require('../db')
const router=express.Router()

router.get('/',(req,res)=>{
    res.status(200).json(obj.user)
})
router.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    console.log(id);
    
   for(const element of obj.user){
       
        if(element.id===id){
            console.log(element);
            
           res.status(200).json(element)
            break;
        }
    }
    
})
router.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = obj.user.length ? obj.user[obj.user.length - 1].id + 1 : 1;
    products.push(newUser);
    res.status(201).json(newUser);
});
router.put('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = user.findIndex(p => p.id === userId);

    if (userIndex !== -1) {
        obj.user[userIndex] = { id: userId, ...req.body };
        res.json(obj.user[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});



module.exports=router