const path = require('path');

const express = require('express');

//Body parser is to parse request and response body 
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')

const app = express();

//Added for environment port deploying in heroku
const PORT = process.env.PORT || 5000


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);


app.listen(PORT);