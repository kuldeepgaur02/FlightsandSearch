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


 ## DB Design 
    - Airplane Table 
    -Flight 
    -Airport 
    -City 

    -A flight belongs to one airplane but one airplane can be used in multiple flights 
    -A City has many airports but one airport belongs to a City 
    -One airport can have many flights ,but a flights belong to one airport 

## TABLES 
   -City ->id ,name,created_at,updated_at

   -Airport -> id,name,address,city_id,created_at,updated_at
      Relationship -> City has many airports belongs to a city (one to many)
   '''
   npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
   '''
   command to crate file in seeder folders 
   '''
   npx sequelize seed:generate --name add-airplanes
   '''
   '''
   -command to execute when you make changes in seeders folder 
   npx sequelize db:seed:all 
   '''
    