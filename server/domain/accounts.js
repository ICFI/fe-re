var Promise = require('bluebird');

function init () {
    return new Promise(function (resolve) {
        console.log("accounts");
        resolve();
    });
}

module.exports = {
    init: init
};