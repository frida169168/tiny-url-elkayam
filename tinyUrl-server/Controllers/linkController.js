import context from "../Contexts/linkContext.js";
import reqIp from "request-ip"
import mail from "../mail/mail.js"
// import clicks from '../Models'
// import express from "express";


const LinksController = {

    getList:  async(req,res)=>{
        let links = await context.getAllLinks();
        res.send(links);
    },

    getById: async(req,res)=>{
        const link = await context.getlinkById(req.params._id);
        res.send(link);
    },

    add: async(req,res)=>{
        const { originalUrl,uniqueName,name}=req.body;
      //  try{
            await context.addLink( originalUrl,uniqueName,name );
        // }catch(error){
        //     if(error.message == "exists"){
        //         res.status(400).send({message:"exists"});
        //     }
        // }

        //  const tinyLink = "tinyurl.com/m2132/"+uniqueName;   /*after tiny*/
        //  const tinyLink = "tinyurl.com/m6352/"+uniqueName;   /*after tiny*/
         const tinyLink = "https://tinyurl-b8yl.onrender.com/"+uniqueName;    /*render*/
        //  const tinyLink = "http://localhost:5000/"+uniqueName;  /*localhost*/
        // mail.sendEmail(tinyLink)
        res.send(tinyLink);
    },

    addTarget:async (req,res)=>{
        const {name, targetValue} = req.body;
        const {uniqueName} = req.params;
        const newLink = await context.addTargetLink(name,targetValue,uniqueName);
        mail.sendEmailTarget()
        res.send(newLink);
    },

    update: async(req,res)=>{
        const {id} = req.params;
        const { originalUrl} =req.params;
        const updatelink = await context.updateLink(id, originalUrl);
        res.send(updatelink); 
    },

    delete: async(req,res)=>{
        const deleted = await context.removeLink(req.params.id);
        res.send(deleted);
    },

    redirect:async(req,res)=>{
        const {uniqueName} = req.params;
        const t = req.query.t;
        const ipAddress = reqIp.getClientIp(res);
        const originalUrl = await context.redirectLink(uniqueName,ipAddress,t);
        console.log('originalUrl is: ', originalUrl.originalUrl);
        res.redirect(301,originalUrl.originalUrl);
    }
}
export default LinksController;





// open gmail
// tinyurl.com/m2132/mail

// open ultra
// tinyurl.com/m2132/m

// tiny after tiny
// tinyurl.com/m2132

//url in render
// https://tinyurl-b8yl.onrender.com/TinyUrl/
