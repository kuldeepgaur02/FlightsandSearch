const express = require("express");

const bodyparser = require("body-parser");

const {PORT} = require('./config/serverconfig');

//const CityRepository = require('./repository/city-repository');

const ApiRoutes = require('./routes/index');

// const city = require("./models/city");

const db = require("./models/index");

const setupandstart = async()=>
{
    const app = express();

    app.use(bodyparser.json());//for middleware 

    app.use(bodyparser.urlencoded({ extended: true }));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>
    {
        
        console.log(`Server is Running on the Port ${PORT}`);

        // const repo = new CityRepository();// as it is a class so creating the obj 
        // repo.createCity({name : "New Delhi"});

        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }


    });
}

setupandstart();


