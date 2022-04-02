const express = require("express")
const router = express.Router()
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

// inserting new record
router.post("/",async(req,res)=>{

    const data = await prisma.listItem.create({
        data:{
            content:req.body.data.content,
        }
    })
    res.json(data)
})

// getting all items
router.get("/",async(req,res)=>{
    const data = await prisma.listItem.findMany()
    console.log(data)                   
    res.json(data)
})

// getting specific item
router.get('/:id',async(req,res)=>{
    const id = Number.isNaN(req.params.id) ? 0 : parseInt(req.params.id)
        const data = await prisma.listItem.findUnique({
            where:{
                id:id
            }
        })  
        res.json(data)  

})

// updating one specific item
router.put('/',async(req,res)=>{
    console.log(req.body.data)
    try{
        const id = Number(req.body.data.id)
        const content = req.body.data.content
        const currentDate = req.body.data.currentDate
        const isDone = req.body.data.isDone
    
        const data = await prisma.listItem.update({
            where:{
                id:id
            },
            data:{
                content:content,
                updatedAt:currentDate,
                isDone:isDone
            }
        })
        res.json(data)      
    }catch(err){
        console.log(err)
    }
})

// deleting one item 
router.delete("/:id",async(req,res)=>{
    try{
        const id = Number(req.params.id)
        const data = await prisma.listItem.delete({
            where:{
                id:id
            }
        })
    
        console.log(`item id : ${id} deleted successfully`)
        res.json(data)      
    }catch(err){
        console.log(err)
    }
})


// deleting all record
router.delete("/",async(req,res)=>{
    const data = await prisma.listItem.deleteMany()
    res.send({message:"all record deleted successfully"})
})


module.exports = router
