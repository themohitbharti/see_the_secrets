
import express from "express";
import axios from "axios";

const app=express();
const port=3000;

app.use(express.static("public"));

app.listen(port,(req,res)=>{
    
   console.log("server chalgya!");
});

app.get("/", async(req,res)=>{
   
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", { secret: result.data.secret ,user:result.data.username});

      } catch (error) {
        console.log(error.response);
      }
})
