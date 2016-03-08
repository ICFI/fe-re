"use strict";

var bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.json());

    app.get('api/v1/agency/:agencyId?', function (res, req) {
        var agencyId = req.params.agencyId;

        if (agencyId) {

        } else {
            
        }
    });
}