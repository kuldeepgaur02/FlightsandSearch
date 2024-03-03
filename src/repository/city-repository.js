const city = require('../models/city');
const { City } = require('../models/index');

class CityRepository 
{
    async createCity ({name })
    {
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            console.log("something went wrong with this layer");
            throw {error};
        }
    }

    async deletecity({cityId})
    {
        try{
            await City.destroy({
                where:{
                    id :cityId}
            });

            return true;

        }
        catch(error)
        {
            console.log("something went wrong with this layer");
            throw {error};
        }
    }
    async updatecity(cityId,data)
    {
        try
        {
            const city = await City.update(data,{
                where :{
                    id: cityId
                }
            });
            return city;

        }
        catch(error)
        {

        }
    }

    async getcity(cityId) {
        try
        {
            const city = await City.findByPk(cityId);
            return city;

        }
        catch(error)
        {
            console.log("something went wrong with this layer");
            throw(error)
        }

    }
}

module.exports = CityRepository;