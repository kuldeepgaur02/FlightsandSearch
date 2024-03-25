const { City } = require('../models/index');

class CityRepository 
{
    async createCity({ name }) { 
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data)
    {
        try
        {
            // THE BELOW APPROACH WILL ALSO WORK BUT IN POSTGRESS
            
            // const city = await City.update(data,{
            //     where :{
            //         id: cityId
            //     }
            // });
            // return city;

            const city = await City.findByPk(cityId);
            city.name = data.name;
            return city;

        }
        catch(error)
        {

        }
    }

    async getCity(cityId) {
        try
        {
            const city = await City.findByPk(cityId);// as we have city as a unique so it is a primary key 
            return city;

        }
        catch(error)
        {
            console.log("something went wrong with this layer");
            throw(error)
        }

    }

    async getAllCities()
    {
        try{
            const cities = await City.findAll();
            return cities;

        }
        catch(error)
        {
            console.log("something went wrong with the repository layer");
            throw{error};
        }
    }
}


module.exports = CityRepository;