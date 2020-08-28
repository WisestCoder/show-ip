const chalk = require('chalk');
const os = require('os');

const ifaces = os.networkInterfaces();

class Ip {
    start() {
        Object.keys(ifaces).forEach(function (dev) {
            ifaces[dev].forEach(function (details) {
                if (details.family === 'IPv4') {
                    console.log(`   ${chalk.green(details.address)}`);
                }
            });
        });
    }
}

module.exports = Ip;