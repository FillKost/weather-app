const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Поле с названием города не может быть пустым!')
    }
    
    const KEY = '74aa1e168a80b2a86d6e8a0731159f82'

    const uri = 'http://api.openweathermap.org/data/2.5/weather?'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    }

    try {
        const data = await rp(options)

        return {
            weather: `${data.name}: ${data.main.temp.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message 
        }
    }

    
}