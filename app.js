const db = require('./models')
const { query } = require('express')

db.user.create({
    firstName: 'Philip',
    lastName: 'Yap',
    age: 18,
    email: 'feilip_yap89@yahoo.com'
})
.then(data => {
console.log(data);
})

//search by id
db.user.findOne({
    where: {id: 1}
})
.then(user =>{
    console.log('==== user 1 ===')
    console.log(user.dataValues);
})

//search by name
db.user.findOne({
    where: {firstName: 'Philip'}
})
.then(user =>{
    console.log('==== user 2 ===')
    console.log(user.dataValues)
})

// search by email
db.user.findOne({
    where: {email: 'feilip_yap89@yahoo.com'}
})
.then(user =>{
    console.log('==== user 3 ===')
    
    console.log(user.dataValues)
})

db.user.findOrCreate ({
    where: {
       firstName: 'Kevin',
       lastName: 'Johnson' 
    },
    defaults: {age: 40, email: 'xx@SpeechGrammarList.com'}
})
.then(([user, created])=>{
console.log(`this was created on ${created}`)
console.log(user.dataValues)
})

let queryOne = {
    where:{
        firstNmae: 'John',
        LastName: 'Smith'
    },
    defaults: {age: 15, email: 'sss@gmail.com'}
}

db.user.findOrCreate(queryOne)
.then(([user, created])=> {
console.log(created)
console.log(user.dataValues)

db.user.findAll()
.then((users)=>{
    for(let i = 0; i< users.length; i++){
        let eachUser = users[i].dataValues
    }
    //console.log(eachUser)
    let firstName = eachUser.firstName
    console.log(firstName)
    })
})