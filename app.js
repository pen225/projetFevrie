const express = require('express');
const PORT = 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) =>{
    res.render('index')
});

app.get('/suiteJun', (req, res) =>{
    res.render('suiteJun')
});

app.listen(PORT, () =>{
    console.log(`Listen on port ${PORT}`);
});