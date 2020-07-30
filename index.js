const express = require('express');
const expressHandlebars = require('express-handlebars');
const helmet = require('helmet');

//instantiate express
const app = express();


//'use' statements, declaring middlewares
app.use(express.static(__dirname + "/public"));
app.use(helmet());

//HandleBars setting
app.set("view engine", "hbs");
app.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout: 'index'
}));

//Declare port to run on
const PORT = process.env.PORT || 8080;

//listen on the declared port
app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`);
})

//Landing Page
app.get('/', (req, res)=>{
    res.send("server Working!");
})


