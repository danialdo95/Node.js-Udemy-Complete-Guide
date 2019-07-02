const path = require('path');

const express = require('express');

//Body parser is to parse request and response body 
const bodyParser = require('body-parser');

//Use for setting up handlebars 
//const expressHbs = require('express-handlebars')

const app = express();

//Added for environment port deploying in heroku
const PORT = process.env.PORT || 5000

//for handlebars need to set up view engine
// app.engine(
//     'hbs', 
//     expressHbs({
//         layoutsDir: 'views/layouts/', 
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );


// app.set('view engine', 'pug');
//app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes); 
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'});
});


app.listen(PORT);