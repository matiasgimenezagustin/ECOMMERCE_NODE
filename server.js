import express from 'express'
import productsRouter from './products/products.router.js'
import cartRouter from './carts/carts.router.js'

const PORT = 8080
const app = express()

app.use(express.json())
app.use('/api/products', productsRouter)
app.use('/api/carts', cartRouter)



app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en http://localhost:${PORT}/`)
})