//require db
const db = require("./database");

//create class call todo

class Todo {

    constructor(){

    }

    static async getAllTodos(){

        try{
            const records = await db.query("SELECT * FROM todos ORDER BY id DESC");

            return records;
        }
        catch(error){
            return error.message;
        }
    }

    static async insertTodo(description){
        try{
            await db.none(`INSERT INTO todos VALUES (DEFAULT, $1)`, [description]);

            return true;
        }
        catch(error){
            return error
        }
    }

}


//export the class

module.exports = Todo;




