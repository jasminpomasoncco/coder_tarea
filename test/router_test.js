// const express = require('express')
// const ApiUserMock = require('./test')

// class UserRouter extends express.Router {
//     constructor() {
//         super()
//         const apiUsers = new ApiUserMock()

//         this.post('/random', (req, res) => {
//             const cant = Number(req.query.cant) || 5
//             const products = apiUsers.generarNProductos(cant)
//             res.json(products)
//         })

//         this.get('/', (req, res) => res.json(apiUsers.getAll()) )

//         this.get('/:id', (req, res) => {
//             const id = req.params.id
//             return res.json(apiUsers.get(id))
//         })

//     }
// }

// module.exports = UserRouter