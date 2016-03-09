var fs          = require('fs'),
    path        = require('path'),
    sqlite3     = require('sqlite3').verbose(),
    tags        = require('./tags.js'),
    agencies    = require('./agencies.js'),
    accounts    = require('./accounts.js'),
    dbFile      = path.join(__dirname, '../../data/db/registry.db');

function deleteDatabaseFile () {
    return new Promise(function (resolve, reject) {
        console.log(dbFile);
        fs.access(dbFile, function (err) {
            if (!err) {
                console.log('exists');
                fs.unlink(dbFile, function () {resolve();});
            } else {
                resolve();
            }
        });
    });
}

function openDatabase () {
    return new Promise(function (resolve, reject) {
        console.log(dbFile);
        fs.open(dbFile, "w+", function () {
            // var db = new sqlite3.Database(dbFile);
            // db.close();
            fs.chmodSync(dbFile, '777');
            resolve();
        });
    });
}

function init () {
    return deleteDatabaseFile()
        // .then(function () {
        //     return openDatabase();
        // })
        .then(function () {
            return tags.init();
        })
        .then(function () {
            return agencies.init();
        })
        .then(function () {
            return accounts.init();
        });
}

module.exports = init;