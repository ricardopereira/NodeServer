##n - Node version management

https://github.com/tj/n

    node --version
    n
    n 0.8.14 //install

##NPM install
    
curl https://npmjs.org/install.sh | sudo sh

    npm install debug --save-dev
    npm install config -S

##Debug

https://github.com/visionmedia/debug

    var debug = require('debug')('app:main')
    debug('Main init')

    DEBUG=app:main node
    DEBUG=app:* node

##Config

https://github.com/lorenwest/node-config

    config/default.json
    config/production.json
    config/development.json

    {
        "DB": { "uri": "localhost" }
    }

    var config = require('config');
    var dbConfig = config.get('Customer.dbConfig');
    if (config.has('optionalFeature.detail')) {

    export NODE_ENV=production

##Morgan

 Before routes! - HTTP request logger middleware
`app.use(morgan('dev'));`

##Winston

https://github.com/flatiron/winston#using-the-default-logger

    winston.cli()
    winston.add(winston.transports.File, { filename: '001.log' })

##Enums

simple-enum

    var enumFactory = require('simple-enum');
    exports.status = enumFactory(['', 'Unpublished', 'Published']);
    exports.type = enumFactory(['', 'News']);

##Run

Build or run with:
`grunt` for building, `grunt serve` for starting.

##Test

Testing with:
`grunt test`