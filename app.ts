import express from "express";

const app = express()


const port =process.env.PORT
app.listen(port||3000, ()=>{
  console.log(`Server listening on port ${port||3000}!`)
})