const {options} = require('../sql/options_mysql')
const knex = require('knex')(options)
class ContenedorMysql {
    constructor(clienteMysql, tabla) {
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    guardar(id,title, price,thumbnail) {
        knex('products').insert(id,title, price,thumbnail)
        .then(() => console.log('data inserted'))
        .catch(err => console.log(err))
        .finally(() => knex.destroy())
    }

    async recuperar() {
        return await knex.from('products').select('*')
    }
}

module.exports = ContenedorMysql