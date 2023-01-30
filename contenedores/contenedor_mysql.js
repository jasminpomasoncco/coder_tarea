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

    recuperarById(id){
        return knex.from('products')
        .select('*')
        .where('id','=',id)
    }

    delete(id){
        return knex.from('products')
        .where('id','=',id)
        .del()
    }
}

module.exports = ContenedorMysql