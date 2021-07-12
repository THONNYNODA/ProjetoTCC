const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();



app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// require('./app/controllers/funcaoController')(app);
// require('./app/controllers/setorController')(app);
// require('./app/controllers/usuarioController')(app);
// require('./app/controllers/colaboradorControler')(app);
require('./app/controllers/index')(app);



app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(3333);