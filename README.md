/
    -src/
        index.js//server
        models/
        middleware/
        controllers/
        repository/
        utils/
        config/
        services/

# Welcome the the Flight Service

## Project setup
 - clone the project on your local 
 - Execute the `npm install` on the same path as your root directory of the download project 
 - create a `.env` file in the root directory and add the following enviroment variable 
      - `PORT =3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following peice of the code  about the the password and database name in the file made.

 - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`