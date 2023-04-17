import mongoose from 'mongoose'
import { ObjectId } from 'bson';

const LinksModelSchema = mongoose.Schema({
    "originalUrl":String,
    "uniqueName":String,
    "clicks":[
        {
        // "id": ObjectId,
        "insertedAt":Date,
        "ipAddress":String,/*ipv4*/
        "targetParamValue":String,
    }],
    
    // "targetParamName":String,
    "targetValues":[
        {
            // "id":ObjectId,
            "name":String,
            "value":String,
        }]
})

export default mongoose.model('Links', LinksModelSchema); 
