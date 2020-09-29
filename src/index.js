const express = require('express');
const app = express();
const cors = require('cors');


app.set('port', process.env.PORT || 3000);
app.use(cors());

//Route general
app.use(require('./routes/index.js'));

app.listen(app.get('port'), () => {
    console.log("Servidor en puerto:"+app.get('port'));
});