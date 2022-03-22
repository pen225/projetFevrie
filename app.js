const express = require('express');
const PORT = 3000;
const app = express();
const index = require('./router/index');
const suiteJunior = require('./router/suiteJunior');
const formReservation = require('./router/formReservation');
const successChambreJun = require('./router/successChambreJun');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use('/', index);
app.use('/suiteJunior', suiteJunior);
app.use('/formReservation', formReservation);
app.use('/successChambreJun', successChambreJun);




app.listen(PORT, () =>{
    console.log(`Listen on port ${PORT}`);
});