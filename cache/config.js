const { getIpAddress } = require("./src/utils/index")
module.exports = {
    host: getIpAddress() || 'localhost',
    port: 9999
}