const { Model } = require('sequelize');
const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create  = async(req,resp)=>
{
    try {
        const flight = await flightService.createFlight(req.body);
        return resp.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
    })

    }
    catch(error)
    {
        console.log(error);
        return resp.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }

}

const getAll = async(req,resp)=>{
    try{

        const response = await flightService.getAllFlightData(req.query);
        return resp.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched a flight'
    })

    }
    catch(error)
    {
        console.log(error);
        return resp.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the  flight',
            err: error
        });

    }
}

module.exports={
    create,
    getAll
}