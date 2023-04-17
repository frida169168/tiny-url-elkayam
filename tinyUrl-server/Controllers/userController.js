import context from "../Contexts/userContext.js";
import mail from "../mail/mail.js"
const UserController = {

    getList:  async(req,res)=>{
        let users = await context.getAllUsers();
        res.send(users);
    },

    getById: async(req,res)=>{
        const user = await context.getUserById(req.params.id);
        res.send(user);
    },

    getByNameAndPass: async(req,res)=>{
        const user = await context.getUserById(req.name,req.password);
        res.send(user);
    },

    add: async(req,res)=>{
        const {name,email,password}=req.body;
            // try{
        const newUser = await context.addUser( {name,email,password});
        //   }catch(error){
            // if(error.message == "exists"){
            //     res.status(400).send({message:"exists name"});
            // }
        // }
        mail.sendEmailRegister(name,email);
        res.send(newUser);
    },

    update: async(req,res)=>{
        const {idd} = req.params;
        const {user} =req.params;
        const updateUser = await context.updateUser(idd, {user});
        res.send(updateUser); 
    },

    delete: async(req,res)=>{
        const deleted = await context.removeUser(req.params.id);
        res.send(deleted);
    }
}
export default UserController;