// Create min expres app(Seperate raute)
import exp from 'express'
export const userApp=exp.Router();

//Test Data (Replace the data with )
let  users=[]

//Creating API(REST API[Representational State Transfer])

//Route to Haandle GET Request of Client
userApp.get('/users',(req,res)=>{
//send res to client
res.json({message:"all users",payload:users})
})

//Route to read user by id
userApp.get('/users/:id',(req,res)=>{
    //get user by id from url pattern
    let userId=Number(req.params.id)
    //find user
    let user=users.find(userobj=>userobj.id===userId)
    //if user not found
    if(user===undefined){
        return res.json({message:"user not found"})
    }
    //send res
    res.json({message:"user found",payload:user})
})
//Route to Haandle POST Request of Client
userApp.post('/users',(req,res)=>{  
    //get user from client
    const newUser=req.body
    //push useer into users
    users.push(newUser)
    //send req
res.json({message:"user created"})
})
// Route to Handle PUT Request of Client
userApp.put('/users', (req, res) => {
    // get modified user from client {}
    let modifiedUser = req.body;
    // get index of existing user in user array
    let index = users.findIndex((userobj) => 
        userobj.id === modifiedUser.id
    );
    // if user not found
    if (index === -1) {
        return res.json({ message: "User not found" });
    }
    // update user with index
    users.splice(index, 1, modifiedUser);
    // send response
    res.json({ message: "Updated user successfully" });
});
//Route to Haandle DELETE Request of Client
userApp.delete('/users/:id',(req,res)=>{
//get id of from url parameter
let idOfUrl=Number(req.params.id)//{id:'1'}
//find index of the user
let index=users.findIndex(userObj=>userObj.id===idOfUrl)
//if user not found
if(index===-1){
return res.json({message:"User not found to delete"})
}
//delete user by id
users.splice(index,1)
//send res
res.json({message:"User removed",payload:users})
})
