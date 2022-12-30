const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const products = require('./products')

const app = express()

app.use(express.json())
app.use(cors())

app.get(`/`, (req, res) => {
    res.send("Welcome to Shoppping Cart page")
})
app.get(`/products`, (req, res) => {
    res.send(products)
})


const port = process.env.PORT || 5000

// if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
//   }


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})