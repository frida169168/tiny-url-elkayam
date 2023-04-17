import userModel from "../Models/userModel.js";

const userContext = {

    getAllUsers: async()=>{
        let users = await userModel.find();
        return users;
    },

    getUserById: async(id)=>{
        const Users = await userModel.findById(id);
        return Users;
    },
    getUserByNameAndPass: async(name,pass)=>{
        // const Users = await userModel.findOne({"name":name }) && userModel.findOne({"password":pass });
        const Users = await userModel.findOne({"name":name ,"password":pass });
        return Users;
    },

    addUser: async( {name,email,password})=>{
        //       if( userModel.findOne({'name':name})){
        //      throw new Error("exists name")
        //  }
        const newUser = new userModel( {name,email,password});
        newUser.save();
        return newUser;
    },

    updateUser: async(id,User)=>{
        const updateUser = await userModel.findByIdAndUpdate(id,User,{new:true});
        updateUser.save();
        return updateUser;
    },

    removeUser: async(id)=>{
        const deleted = await userModel.findByIdAndRemove(id);
        return deleted;
    }
}

export default userContext;