import linkModel from "../Models/linkModel.js";
import mongoose from "mongoose";


let value = 1;

const linkContext = {

    getAllLinks: async()=>{
        let links = await linkModel.find();
        return links;
    },

    getlinkById: async(id)=>{
        const links = await linkModel.findById(id);
        return links;
    },

    addLink: async( originalUrl,uniqueName ,name)=>{
        //  if( linkModel.findOne({'uniqueName':uniqueName})){
        //      throw new Error("exists")
        //  }
        const newLink = new linkModel( {originalUrl,uniqueName,name});
        const addedLink = await newLink.save();
        return addedLink;
    },

    updateLink: async(id,link)=>{
        const updateLink = await linkModel.findByIdAndUpdate(id,link,{new:true});
        updateLink.save();
        return updateLink;
    },

    removeLink: async(id)=>{
        const deleted = await linkModel.findByIdAndRemove(id);
        return deleted;
    },

    redirectLink: async(name,ip,value)=>{
        const link=await linkModel.findOne({'uniqueName':name})
        link.clicks.push({/* id :mongoose.Types.ObjectId() ,*/insertedAt :new Date , ipAddress:ip, targetParamValue: value} );
        link.save();
        console.log(link);
        return link;
    },

    addTargetLink: async(name,targetValue ,uniqueName)=>{
        const link=await linkModel.findOne({'uniqueName':uniqueName});
        link.targetValues.push({/*id:mongoose.Types.ObjectId,*/name:name,value:ind});
        link.save(link);
         return "https://tinyurl-b8yl.onrender.com"+uniqueName+"?t="+targetValue; 
        //  return "tinyurl.com/m6352/"+uniqueName+"?t="+ind; 
        //  return "tinyurl.com/m2132/"+uniqueName+"?t="+ind; 
        // return "http://localhost:5000/"+uniqueName+"?t"+ind;  
    }
}

export default linkContext;