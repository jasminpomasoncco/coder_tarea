const {options} = require('./options_mysql.js')
const knex = require('knex')(options)

knex.schema.hasTable('users')
    .then(exists => {
        if (!exists) {
            knex.schema.createTable('users', tabla => {
                tabla.string('id'),
                    tabla.string('user'),
                    tabla.string('password')
            })
                .then(() => {
                    console.log('tabla "users" creada!')
                })
        } else {
            console.log('la tabla "users" ya existe. no se realizaron cambios')
        }
    })
    .finally(() => {
        knex.destroy()
    })