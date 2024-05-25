import express from 'express'
import { 
    deleteProductController, 
    getProductByIdController, 
    getProductsController, 
    postProductController, 
    putProductController 
} from './products.controller.js'

const productsRouter = express.Router()


productsRouter.get('/', getProductsController)

productsRouter.post('/', postProductController)

productsRouter.get('/:pid', getProductByIdController)

productsRouter.put('/:pid', putProductController)

productsRouter.delete('/:pid', deleteProductController)


export default productsRouter