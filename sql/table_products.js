const {options} = require('./options_mysql.js')
const knex = require('knex')(options)

knex.schema.hasTable('products')
    .then(exists => {
        if (!exists) {
            knex.schema.createTable('products', tabla => {
                tabla.string('id'),
                    tabla.string('title'),
                    tabla.integer('price'),
                    tabla.string('thumbnail')
            })
                .then(() => {
                    console.log('tabla "products" creada!')
                })
        } else {
            console.log('la tabla "products" ya existe. no se realizaron cambios')
        }
    })
    .finally(() => {
        knex.destroy()
    })