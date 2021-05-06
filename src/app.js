const express = require("express")
const path = require('path')
const morgan = require("morgan")

const PORT = process.env.PORT || 3000

const app = express();
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'scripts')));


app.get('/', (req, res, next)=>{
    //res.send("hello world");
    res.sendFile('./index.html', {root: __dirname});
});

app.listen(PORT, ()=>{
    console.log(`server started : http://localhost:${PORT}`);
});