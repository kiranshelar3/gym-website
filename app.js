const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port = 80

// express specific
app.use ('/static', express.static('static')) 
app.use(express.urlencoded())

//pug specific
app.set('view engine', 'pug') // template engine as pug  
app.set('views', path.join(__dirname, 'templates')) //template dir

//endpoints
app.get("/", (req, res)=> {
    const con = "This is a node js content createdd by me."
    const params = {'title':'Dynamo Fitness', content:con}
    res.render('index.pug',params);
});

app.post('/', (req, res)=>{
    // console.log(req.body)
    name = req.body.name
    age = req.body.age
    number = req.body.number
    gender =req.body.gender
    queries = req.body.queries
    let optowrite = `name of the client is ${name}, age:${age}, number: ${number}, gender${gender}, queries: ${queries}. `


    fs.writeFileSync('output.txt',optowrite)


    const params = {'message':'your form has been submitted successfullly.'}
    res.render('index.pug',params);

})


//server

app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`)
})