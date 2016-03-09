var Promise = require('bluebird');

function init () {
    return new Promise(function (resolve) {
        console.log("agencies");
        resolve();
    });
}

module.exports = {
    init: init
};