
let db = require('./models');


// db.user.findAll()
// .then(records =>{

//     //[{}, {}]

//     //records[0].id

//     records.forEach(record =>{
//         console.log(record.id, record.firstName, record.lastName);
//     })
    
// })

// db.user.findByPk(4)
// .then(user =>{
//     console.log(user.firstName, user.lastName);
// })

// db.user.findAll({where: {lastName: 'White'}})
// .then(records =>{
//     //[{}, {}]

//     console.log(records[0].firstName, records[0].lastName);
// })

// db.user.destroy({where: {id: 2}})
// .then(numRowsDeleted =>{
    
//     if(numRowsDeleted >= 1){
//         console.log(`${numRowsDeleted} rows have been deleted from database`);
//     }
// })


// db.user.update({lastName: 'MacKinnons'}, {where: {lastName: 'MacKinnon'}})
// .then(updatedRecord =>{
//     console.log(updatedRecord[0]);
// })


// db.user.create({
//     firstName: 'Andrea',
//     lastName: 'Meyer',
//     email: 'andrea@dc.com'
// });

// db.user.create({
//     firstName: 'Joe',
//     lastName: 'Stocks',
//     email:'joe@dc.com'
// });

// db.user.create({
//     firstName: 'Adam',
//     lastName: 'MacKinnon',
//     email: 'adam@dc.com'
// });

// db.user.create({
//     firstName: 'Cedael',
//     lastName: 'White',
//     email: 'cedael@dc.com'
// });


db.blogs.findAll({
   
    where: {title: 'Promises'},
    include: [{
        model: db.user,
        required: true
        
    }]
})
.then(records => {
    //[{}, {}, {}]

    records.forEach(blog =>{
        console.log(blog.title, blog.user.firstName, blog.user.lastName);
    })
})