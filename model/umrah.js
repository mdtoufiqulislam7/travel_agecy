const mongoose = require('mongoose')


const umradata = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    price:String,
    time: String,
    mokkah_hotel:String,
    madina_hotel:String,
    flights:String,
    flights_down : String,
    food:String,
    service:String,
    imgurl:String,

})

module.exports = mongoose.model('umrah',umradata)