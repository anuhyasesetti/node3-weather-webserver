const path = require('path') // core module
const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res) => {
    res.render('index',{
      title:'Welcome',
      name:'Anuhya'
    })

})



app.get('/help',(req,res) => {
    res.render('help',{
      title:'Help',
      name:'Anuhya'
    })

})

app.get('/about',(req,res) => {
    res.render('about',{
      title:'About',
      name:'Anuhya'
    })

})

app.get('/weather',(req,res) => {
    res.send({
      title:'Weather',
      name:'Anuhya'
    })
})
app.get('/product',(req,res) => {
     if(!req.query.search){
      return res.send({
         error:'provide a search item'
       })
     }
     res.send({
       products:[]
     })
})

app.get('/help/*',(req,res) => {
  res.render('404-msg',{
    title:'Help',
    msg:'My page not found 404 error',
    name:'Anuhya'
   })
})
app.get('*',(req,res) => {
  res.render('404-msg',{
    msg:'My page not found 404 error'
   })
})
app.listen(3000,() => {
  console.log('Server is running at port 3000')
})
