var path        = require('path'),
    Promise     = require('bluebird'),
    dbFile      = path.join(__dirname, '../../data/db/registry.db'),
    knex        = require('knex')({
                        client: 'sqlite3',
                        connection: {
                            filename: dbFile
                        }
                    });

function init () {
    return new Promise(function (resolve) {

        // db.serialize(function () {
        //     db.run("CREATE TABLE if not exists tags (id INTEGER PRIMARY KEY DESC, tag_text TEXT)");
        //     db.run("CREATE TABLE if not exists accounts_tags (tag_id INTEGER PRIMARY KEY DESC, account_id INTEGER)");

        //     var stmt = db.prepare("INSERT INTO tags VALUES(?,?)");
        //     stmt.run(141, 'children');
        //     stmt.run(3854, 'tobacco');
        //     stmt.run(3105, 'emergency');
        //     stmt.finalize();
        // });

        knex.schema.createTable('users', function (table) {
          table.integer('id').primary().unique();
          table.string('tag_text');
        });

        knex.schema.createTable('accounts_tags', function (table) {
          table.integer('tag_id').primary();
          table.integer('account_id');
        });

        knex('users').insert([
            {id: 141, tag_text: 'children'},
            {id: 3854, tag_text: 'tobacco'},
            {id: 3105, tag_text: 'emergency'}
        ])

        resolve();
    });
}

module.exports = {
    init: init
};