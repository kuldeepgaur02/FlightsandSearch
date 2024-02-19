const express = require("express");

const {PORT} = require('./config/serverconfig');

const setupandstart = async()=>
{
    const app = express();

    app.listen(PORT,()=>
    {
        
        console.log(`Server is Running on the Port ${PORT}`);

    });
}

setupandstart();


