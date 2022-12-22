var mongoose = require('mongoose');

// const express = require('express')
// const app = express()
// const port = 3000


// main().catch(err => console.log(err));


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

mongoose.connect('mongodb+srv://codesieg:Celia26500!@cluster0.x1uqrqp.mongodb.net/test', function(err, client) {
    if(err) { console.error(err) }
    db = client.db('test') // once connected, assign the connection to the global variable
})

// app.get('/', function(req, res) {
//     db.collection('test').find({}).toArray(function(err, docs) {
//         if(err) { console.error(err) }
//         res.send(JSON.stringify(docs))
//     })
// })


// var conn = mongoose.connect('mongodb://localhost:27017/') // returns a Promise

// app.get('/', function(req, res) {
//     conn.then(client=> client.db('test').collection('test').find({}).toArray(function(err, docs) {
//         if(err) { console.error(err) }
//         res.send(JSON.stringify(docs))
//     }))
// })


