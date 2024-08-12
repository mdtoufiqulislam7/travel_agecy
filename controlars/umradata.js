const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose')
const umrahmodel = require('../model/umrah');
const { response } = require('../app');
// Configuration
cloudinary.config({ 
    cloud_name: 'dshkbza19', 
    api_key: '587566651786429', 
    api_secret: 'Nd7M3bl2EgFqfJSm1RRE9MZxNq0' // Click 'View Credentials' below to copy your API secret
});



const umradata = (req,res,next)=>{
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        const {title,price,time,mokkah_hotel,madina_hotel,flights,flights_down,service,} = req.body
        const model = new umrahmodel({
            _id:new mongoose.Types.ObjectId,
            title:title,
            price:price,
            time:time,
            mokkah_hotel:mokkah_hotel,
            madina_hotel:madina_hotel,
            flights:flights,
            flights_down:flights_down,
            service:service,
            imgurl:result.url
        })
        model.save()
        .then(response=>{
            res.status(200).json({
                messag:"succeesfuully poost",
                response
            })
        }).catch(err=>{
            res.status(400).json({
                messag:"errrroor poost",
                error:err
            })

        })


    })
    
}

const umrahdataget = (req,res,next)=>{
    umrahmodel.find()
    .then(response=>{
        res.status(201).json({
            messagee:"show all data",
            response
        })
    }).catch(err=>{
        res.status(501).json({
            msg:"erroorr",
            err:err
        })
    })
}

module.exports = {
    umradata,
    umrahdataget
}