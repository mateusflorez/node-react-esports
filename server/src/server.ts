import express from 'express'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinute } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()
const prisma = new PrismaClient({
    log: ['query']
})

app.use(express.json())

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.status(200).json(games)
})

app.get('/games/:id/ads', async (req, res) => {
    const gameId: any = req.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})

app.post('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    const body = req.body

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays,
            hourStart: convertHourStringToMinute(body.hourStart),
            hourEnd: convertHourStringToMinute(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })

    return res.status(201).json(ad)
})

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })

    return res.json({
        discord: ad.discord
    })
})

app.listen(3333, () => console.log('Listening on port 3333'))
