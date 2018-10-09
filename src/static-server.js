const chalk = require('chalk');
const os = require('os');

const ifaces = os.networkInterfaces();

class StaticServer {
    constructor(options) {
        // this.port = options.port;
        // this.indexPage = options.index;
        // this.openIndexPage = options.openindex;
        // this.openBrowser = options.openbrowser;
        // this.charset = options.charset;
        // this.cors = options.cors;
        // this.protocal = options.https ? 'https' : 'http';
        // this.zipMatch = '^\\.(css|js|html)$';
    }

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

module.exports = StaticServer;