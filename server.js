const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//the dirname refers to the root address url

//registering a helper for ommon functionality getting current date

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})

//the helpers can also take arguments

app.get('/' , (req, res) => {
    // res.send('<h1>Hello express</h1>');
    // res.send({
    //     name:'mahesh',
    //     likes:[
    //         'browsing','cricket'
    //     ]
    // })
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        currentDate: new Date().getFullYear(),
        welcomeMessage: 'Welcome to the website'
    });
})

app.get('/about', (req,res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentDate: new Date().getFullYear()
    });
})

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to connect to the server'
    })
})

app.listen(port, () => {
    console.log(`server is up on the port ${port}`);
});

//note:
//specifying different extensions for the nodemon to watch
//nodemon server.js -e js,hbs