const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request.js')

const app = express()

// my key 74aa1e168a80b2a86d6e8a0731159f82
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index.ejs',{weather: null, error: null})
})

app.post('/', async (req, res) => {
    const { city } = req.body
    const {weather, error} = await weatherRequest(city)
    
    res.render('index.ejs', {weather, error})
})

app.listen(3000, () => {
    console.log('server has started on port 3000...')
})