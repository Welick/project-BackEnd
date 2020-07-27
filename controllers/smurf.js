const models = require('../models')

module.exports = {
    get: {
        all: async (req, res) => {
            const { accountType } = req.params
            const accounts = await models.Smurf.find({ type: accountType })

            res.json(accounts)
        },
        one: async (req, res, next) => {
            try {
                const { id } = req.params
                const smurf = await models.Smurf.findOne({ _id: id })
                res.json(smurf)

            } catch (err) {
                next(err)
            }
        }
    },
    post: async (req, res, next) => {
        try {
            const { region, rank, username, password, champions, skins, price, rare, type } = req.body
            const createdSmurf = await models.Smurf.create({ region, rank, username, password, champions, skins, price, rare, type })
            res.json(createdSmurf)
        } catch (err) {
            next(err)
        }
    },
    delete: async (req, res, next) => {
        try {
            const { id } = req.params
            const deleteInfo = await models.Smurf.deleteOne({ _id: id })
            res.json(deleteInfo)
        } catch (err) {
            next(err)
        }
    }
}