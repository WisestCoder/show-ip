const Ip = require('../src/ip');

const options = require('yargs')
    .help()
    .alias('?', 'help')

    .argv;

const ip = new Ip(options);
ip.start();