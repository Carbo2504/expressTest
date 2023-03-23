const express = require('express');

const app = express();

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}));

app.get('/form', (req, res, next) => {
    res.send('<form method = "POST"><input name="str"/></form>');
    res.redirect('/form');
});

app.post('/form', (req, res, next) => {
    const str = req.body.str;
    const reversedString = req.body.str.split('').reverse().join('');
    res.send(reversedString);
});

app.listen(3000);