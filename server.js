import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async(req,res)=>{

  const { message } = req.body;

  try{

    const completion = await openai.chat.completions.create({
      model:"gpt-4o-mini",
      messages:[
        {
          role:"system",
          content:"Ou se GermainGPT, yon AI entèlijan ki pale kreyòl."
        },
        {
          role:"user",
          content:message
        }
      ]
    });

    res.json({
      reply:completion.choices[0].message.content
    });

  }catch(error){
    res.json({
      reply:"Gen yon erè."
    });
  }

});

app.listen(3000,()=>{
  console.log("GermainGPT ap mache...");
});