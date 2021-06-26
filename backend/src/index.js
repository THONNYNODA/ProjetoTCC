const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();



app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 
app.use(cors());

require('./app/controllers/funcaoController')(app);
require('./app/controllers/setorController')(app);
require('./app/controllers/usuarioController')(app);
require('./app/controllers/colaboradorControler')(app);



app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(3333);