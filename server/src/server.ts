import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany()

    return res.status(200).json(games)
})

app.get('games/:id/ads', (req, res) => {
    return res.json([
        { 'id': 1, name: 'Ad 1' },
        { 'id': 2, name: 'Ad 2' },
        { 'id': 3, name: 'Ad 3' },
        { 'id': 4, name: 'Ad 4' },
    ])
})

app.get('ads/:id/discord', (req, res) => {
    return res.json([
        { 'id': 1, name: 'Ad 1' },
        { 'id': 2, name: 'Ad 2' },
        { 'id': 3, name: 'Ad 3' },
        { 'id': 4, name: 'Ad 4' },
    ])
})

app.listen(3333, () => console.log('Listening on port 3333'))
