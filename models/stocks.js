var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StocksSchema = new Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
        
    },
    symbol: {
        type: String,
        required: true,
        unique: true
    }

        

});

var Model = mongoose.model('Stocks', StocksSchema);

                                                                                                    

module.exports = Model;