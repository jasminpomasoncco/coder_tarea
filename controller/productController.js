const Product =  require('../contenedores/contenedor');
//const product = new Product('data/productos.txt');
const ContenedorSQL = require('../contenedores/contenedor_mysql.js');
const clienteSql = require('../sql/options_mysql')
const contenedor_products = new ContenedorSQL(clienteSql, 'products')
const { randomUUID } =  require('crypto')

const getAllProducts = async(req, res) => {
    try {
        res.json({
            products: await contenedor_products.recuperar()

        });

    } catch (error) {
        res.status(500).json({
            error: 'Error getall'
        })
    }
}

const getProductById = async(req, res) => {
    try {
        const productFound = await contenedor_products.recuperarById(+req.params.id);

        if(!productFound){
            return res.json({
                error: 'Product not found'
            })
        }
        return res.json({
            producto: productFound
        })
    } catch (error) {
        res.status(500).json({
            error: 'error getbyid'
        })
    }
}

const createProduct = async(req, res) => {
    try {
        const { title, price,thumbnail} = req.body;
        const id = req.body
        id = randomUUID()
        await contenedor_products.guardar(id,title, price,thumbnail)
        //res.json(new_product);
        console.log('aaaaaaaaaa')
        
    } catch (error) {
        res.status(500).json({
            error: 'Error create'
        })
    }
}

const updateProduct = async(req, res) => {
    try {
        const message = await product.updateById(+req.params.id, req.body);
        if(!message){
            return res.json({
                error: `Product with ID: ${+req.params.id} not found`
            })
        }
        return res.json({
            message
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error update'
        })
    }
}

const deletePoduct = (req, res) => {
    try {
        contenedor_products.delete(id)
        return res.json({
            message: 'Product deleted'
        })
    } catch (error) {
        res.status(500).json({
            error: 'Error delete'
        })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deletePoduct
}