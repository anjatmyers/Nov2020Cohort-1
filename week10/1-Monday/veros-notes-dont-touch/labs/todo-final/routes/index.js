
const express = require('express');
const router = express.Router();
const db = require('../models/database');
const todoModel = require('../models/todos');

router.use(express.json());
router.use(express.urlencoded({extended: false}));


router.get('/', (req,res) => {
  
    res.render('index')
})


router.get('/api', async(req, res) => {
    //return all of the current todos
    //1 2 3 4 5   5, 4, 3, 2, 1

    try{
        let records = await todoModel.getAllTodos()
    
        res.json(records)
    }
    catch(error){
        res.send(error)
    }
    
})


router.post('/api', async (req, res) => {
    //insert a todo

    try{
        await todoModel.insertTodo(req.body.description);
        let records = await todoModel.getAllTodos();
        res.send(records);
    }
    catch(error){
        return error;
    }
  
})

router.patch('/api/description/:id', (req, res) => {
    //update a todo description

    let id = req.body.id;
    let description = req.body.description;

    db.none('UPDATE todos SET description = $1 WHERE id = $2', [description, id])
    .then(()=>{
        //query
        db.query('SELECT * FROM todos ORDER By id DESC')
        .then(records =>{

            res.json(results);
        })
        .catch(error =>{
            res.status(404).send('error cannot query db')
        })
    })
    .catch(error =>{
        res.status(404).send(`error couldn't update record`)
    })

   
})



router.delete('/api/:id', (req, res) => {

    let id = req.params.id;

    console.log(`here ${id}`);
    //delete
    
     db.none(`DELETE FROM todos WHERE id = $1`, [id])
     .then(()=>{
        
        //query
        db.query('SELECT * FROM todos ORDER BY id DESC')
        .then(records =>{
            //[{}, {}, {}]
            
            res.json(records)
        })
        .catch(error =>{
            res.status(404).send('cannot query results')
        })
     })
     .catch(error =>{
        console.log('inside of error')
         res.status(404).send('error in delete');
     })
    
})

router.delete('/api/delete/all', (req, res) => {
    //deletes all entries

    console.log('here');
    db.none(`DELETE FROM todos`)
    .then(()=>{
        db.query("SELECT * FROM todos ORDER BY id DESC")
        .then(records =>{

            res.json(records)
        })
        .catch(error =>{
            res.status(404).send(`can't query data`);
        })
    })
    .catch(error =>{
        res.status(404).send('delete not successful')
    })
    
})

module.exports = router;