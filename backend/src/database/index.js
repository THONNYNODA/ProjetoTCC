const mongoose = require('mongoose');

const URL = 'mongodb+srv://root:root@sistemaos.yjxp2.mongodb.net/SistemaOs?retryWrites=true&w=majority';
//'mongodb://localhost/sistemaOs'

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;



module.exports = mongoose;