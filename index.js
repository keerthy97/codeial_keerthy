const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and script into subpages into the layouts
app.set('Layout extractStyles', true);
app.set('Layout extractScripts', true);

// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine','ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});
