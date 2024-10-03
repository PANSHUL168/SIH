require('dotenv').config()
const express= require('express')

const app= express()
const port= 3000
app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get('/twiiter', (req,res)=>{
    res.send("hello twitter")
})


app.listen(process.env.PORT,()=>{
      console.log(`example listening to the port ${port}`)
})