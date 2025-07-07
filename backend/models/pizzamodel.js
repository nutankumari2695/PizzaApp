
const mongoose = require('mongoose');
// const  pizzas = require('../myapp/src/pizzadata');
const pizzaSchema = new mongoose.Schema({

    // name: {type:String, require},
    // variants: [],
    // prices:[],
    // Image: {type:String,require},
    // category:{type: String, require},
    
    // description: {type: String, require}


    name: { type: String, required: true },
    variants: { type: [String], required: true }, // corrected spelling
    prices: { type: Map, of: Number, required: true }, // Define prices as a map for size-specific prices
    
    
    image: { type: String, required: true }, // corrected property name to lowercase
    category: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true // corrected option to plural
});

const pizzamodel = mongoose.model('pizzas', pizzaSchema);

module.exports = pizzamodel;











// const { Timestamp } = require('bson');
// const  mongoose= require('mongoose');
// const { type } = require('os');

// const pizzaSchema = mongoose.Schema({

//     name: {type:String, require},
//     varients: [],
//     prices:[],
//     category:{type: String, require},
//     Image: {type:String,require},
//     description: {type: String, require}

// } , {
//     Timestamp:true,
// })
// const pizzaModel = mongoose.model('pizzas', pizzaSchema)

// module.exports = pizzaModel