import express from 'express';
import {join} from 'path';
const app = express();
const port = process.env.PORT || '3000'
import web from './routes/web.js'

app.use(express.static(join(process.cwd(),'public')))
//setup the directory where template files located.
// app.set('views','./views') //name is same view so not required.

//set up the template engine for views
app.set('view engine', 'ejs')
app.use('/',web)

app.listen(port,()=>{
    console.log("Server connected Successfully.");
})