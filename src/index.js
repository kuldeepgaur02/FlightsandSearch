const express = require("express");

const bodyparser = require("body-parser");

const {PORT} = require('./config/serverconfig');

const setupandstart = async()=>
{
    const app = express();

    app.use(bodyparser.json());//for middleware 

    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT,()=>
    {
        
        console.log(`Server is Running on the Port ${PORT}`);

    });
}

setupandstart();


