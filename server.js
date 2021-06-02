const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.options('*', cors());
const Payment = require('./routes/payment')



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

const http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>server is Running...</h1>');
});
app.use('/api/payment', Payment)


http.listen(3000, () => {
    console.log('listening on *:3000');
});
// http.listen(process.env.PORT || 5000, () => {
//     //console.log('listening on :3000');
// })