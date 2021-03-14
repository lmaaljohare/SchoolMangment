const express = require('express')//framework
const app = express()
const cors=require('cors')
const bodyParser=require('body-parser')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

students= [
 { id: 11924075,name:"Lma",date:new Date("2001-06-19"),gpa:2.62,regester:new Date()}   

]

app.listen(8000, () => {
    console.log('Server started!')
})
//get all data
app.route('/api/allstudents/').get((req,res)=>{
     console.log("All Students Returned");
     res.status(200).json(students);
 });

//add new data
app.use(bodyParser.json())
app.route('/api/allstudents/').post((req,res)=>{
console.log(req.body);
students.push(req.body);
res.status(200).json(req.body)
})