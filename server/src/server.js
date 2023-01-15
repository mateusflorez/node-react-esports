import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
    console.log('App is running')
})

app.listen(3333, () => console.log('Listening on port 3333'))
