const mongoose = require('mongoose')
const { Schema } = mongoose

const SmurfSchema = new Schema({
    region: {
        type: Schema.Types.String,
        required: [true, 'Region is required!'],
        minlength: [2, 'Regions should be at least 2 symbols!']
    },
    rank: {
        type: Schema.Types.String,
        required: [true, 'Rank is required!'],
        minlength: [6, 'Rank should be at least 6 symbols!']
    },
    username: {
        type: Schema.Types.String,
        required: [true, 'Username is required!'],
        minlength: [3, 'Username should be at least 3 symbols!']
    },
    password: {
        type: Schema.Types.String,
        required: [true, 'Password is required!'],
        minlength: [4, 'Password should be at least 4 symbols']
    },
    champions: {
        type: Schema.Types.Number,
        required: [true, 'Champions count is required!'],
        validate: {
            validator: (value) => {
                return value >= 0
            },
            message: 'Champions count should be a positive number!'
        }
    },
    skins: {
        type: Schema.Types.Number,
        required: [true, 'Skins count is required!'],
        validate: {
            validator: (value) => {
                return value >= 0
            },
            message: 'Skins count should be a positive number!'
        }
    },
    price: {
        type: Schema.Types.String,
        required: [true, 'Price is required!'],
        minlength: [1, 'Price should be at least 1 symbol!']
    },
    rare: {
        type: Schema.Types.String,
        default: 'No rare skins'
    },
    type: {
        type: Schema.Types.String
    }
})

module.exports = mongoose.model('Smurf', SmurfSchema)