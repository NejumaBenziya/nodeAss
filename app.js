const express=require('express')
const app=express()
const cors=require('cors')
const user=require('./Router/user')
const products=require('./Router/products')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user',user)
app.use('/products',products)
app.use(errMiddleWare)
app.listen(4000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server is running at port 4000')
    }
})
function errMiddleWare(err,req,res,next){
    console.log('Error:',err);
    res.json({name:'akhil',age:12})
    
}