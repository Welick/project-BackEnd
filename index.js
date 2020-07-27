// const express = require('express')
// const config = require('./config/config')
// const dbConnector = require('./config/database')

// const app = express()

//     (async () => {
//         await dbConnector
//         console.log('Database is ready!')

//         require('./config/express')(app)
//         // require('./config/routes')(app)

//         // app.use((err, req, res, next) => {
//         //     console.log(err);
//         // })
//         app.listen(config.port, () => {
//             console.log(`Listening on port ${config.port}!`)
//         })
//     })()

require('./config/database')().then(() => {

    const config = require('./config/config');
    const app = require('express')();
    const appString = `Server is ready for usage, listening on port ${config.port}`;

    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, console.log(appString));
})