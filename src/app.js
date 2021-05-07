import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'


const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3000


const app = express();

//logger
app.use(morgan('dev'));

//static folder
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next)=>{
    console.log(__dirname);
    res.sendFile('./index.html', {root: __dirname});
    
});

app.listen(PORT, ()=>{
    console.log(`server started : http://localhost:${PORT}`);
});