const path = require('path')
const hbs=require('hbs')
const express = require('express')
const request = require('request')
const fs=require('fs')
const app = express()
app.set('view engine', 'hbs');
const publicFiles= path.join(__dirname,'../public')
const viewsFiles= path.join(__dirname,'../templates/views')
const partialFiles= path.join(__dirname,'../templates/partial')
app.use(express.static(publicFiles))
app.set('views',viewsFiles)

hbs.registerPartials(partialFiles)
let Data=JSON.parse(fs.readFileSync('src/myjsonData.json').toString())
console.log(Data.articles)
app.get('',(req,res)=>{
    res.render('index', { Mydata : Data.articles })
})
app.get('/:title',(req,res)=>{
    // req.params.id
    x=Data.articles
     let s =x.filter(function(singeData){
         return singeData.title ==req.params.title
     })
     console.log(s[0])
     res.render('single', { Mydata : s[0] })
 })
 
app.listen(3002)