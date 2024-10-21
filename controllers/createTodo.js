const Todo = require("../models/ToDo");

exports.createTodo = async(req,res)=>{
    try{
        const {title,discription} = req.body;
        const response = await Todo.createTodo({title,discription});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        );
    }catch(err)
    {
        console.log("entry is not created");
        res.status(500).json(
            {
                success:false,
                data:"internel server error",
                message:"error while creating entry"
            }
        );
    }
}