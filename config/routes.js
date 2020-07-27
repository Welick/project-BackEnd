const routers = require('../routes')

module.exports = (app) => {

    app.use('/api/user', routers.user)

    app.use('/api/smurf', routers.smurf)
}