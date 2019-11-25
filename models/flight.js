var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var destinationSchema = new Schema({
    airport: {
        type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN' & 'SEA']
    },

    arrival: {
        type: Date
    }
})



var flightSchema = new Schema({

    airline: {
        type: String, enum: ['American', 'Southwest', 'United']
    },

    flightNo: {
        type: Number, min: 10, max: 9999
    },

    departs: {
        type: Date, 
        // default: Date
    },

    airport: {
        type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN' , 'SEA']
    },
    
    destination: [destinationSchema]

});
module.exports = mongoose.model('Flight', flightSchema)