const {options} = require('./options_sqlite3.js')
const knex = require('knex')(options)

knex.schema.hasTable('messages')
    .then(exists => {
        if (!exists) {
            knex.schema.createTable('messages', tabla => {
                tabla.increments('id'),
                    tabla.string('email'),
                    tabla.string('messages'),
                    tabla.date('date_at')
            })
                .then(() => {
                    console.log('tabla "messages" creada!')
                })
        } else {
            console.log('la tabla "messages" ya existe. no se realizaron cambios')
        }
    })
    .finally(() => {
        knex.destroy()
    })