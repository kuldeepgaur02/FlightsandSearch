const {CityService}= require('../services/index');

const CityService = new CityService();

const create = async (req,resp)=>
{
    try{
        const city = await CityService.createCity(req.body);
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
        const response = await CityService.deleteCity(req.params.id);
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
        const response = await CityService.getCity(req.params.id);
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
        const response = await CityService.updateCity(req.params.id,req.body);
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

module.exports ={
    create,
    destroy,
    get,
    update
}
