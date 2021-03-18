const express = require('express')
const path = require('path');

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, 'public')));

app.get('*'|| '*/*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, './public/index.html'));                               
});

app.listen(app.get('port'), ()=> console.log('server on port: ',app.get('port')));