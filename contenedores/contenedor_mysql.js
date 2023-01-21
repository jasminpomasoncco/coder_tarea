class ContenedorMysql {
    constructor(clienteMysql, tabla) {
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    guardar(data) {
        knex('products').insert(data)
        .then(() => console.log('data inserted'))
        .catch(err => console.log(err))
        .finally(() => knex.destroy())
    }

    async recuperar() {
        return await this.cliente(this.tabla).select();
    }
}

module.exports = ContenedorMysql