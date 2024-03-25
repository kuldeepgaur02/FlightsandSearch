const {CityService}= require('../services/index');

const cityService = new CityService();

const create = async (req,resp)=>
{
    try{
        const city = await cityService.createCity(req.body);
        return resp.status(201).json({
            data :city,
            success : true,
            message : 'successfully created a city',
            err:{}
        });
    }
    catch (error)
    {
        console.log(error);
        return resp.status(500).json({
            data :{},
            success:false,
            message : 'not able to create the city',
            err:error
        });
    }

}

// Delete --> /city/:id

const destroy = async (req,resp)=>
{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return resp.status(200).json({
            data : response,
            success : true,
            message : 'successfully deleted the city',
            error:{}
        });
    }
    catch(error)
    {
        console.log(error);
        return resp.status(500).json({
            data :{},
            success:false,
            message : 'not able to create the city',
            err:error
        });
    }

}
// GET --> /city/:id
const get = async (req,resp)=>
{
    try{
        const response = await cityService.getCity(req.params.id);
        return resp.status(200).json({
            data : response,
            success : true,
            message : 'successfully fetched the city',
            error:{}

        });
    }
    catch(error)
    {
        console.log(error);
        return resp.status(500).json({
            data :{},
            success:false,
            message : 'not able to fetch the city',
            err:error

        });
    }

}
// Patch --> /city/:id ->req.body
const update =async (req,resp)=>
{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return resp.status(200).json({
            data : response,
            success : true,
            message : 'successfully updated  the city',
            error:{}

        });
    }
    catch(error)
    {
        console.log(error);
        return resp.status(500).json({
            data :{},
            success:false,
            message : 'not able to update the city',
            err:error
        });

    }
    
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the cities',
            err: error
        });
    }
}

module.exports ={
    create,
    destroy,
    get,
    update,
    getAll
}
