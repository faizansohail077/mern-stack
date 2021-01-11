import express from 'express'
import bodyParsar from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import PostRoutes from './routes/posts.js'


const app = express()

app.use(bodyParsar.json({ limit: '30mb', extended: true }))
app.use(bodyParsar.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', PostRoutes)

const CONNECTION_URL = 'mongodb+srv://crud:RZNJPRztp3pq3GRk@cluster0.qwjpj.mongodb.net/cruddb?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) =>  res.send('working fine') )
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose.set('useFindAndModify', false)

