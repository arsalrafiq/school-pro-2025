import express, { Application } from 'express'
import cors from 'cors'
import schoolRouter from './routes/schools'

const app: Application = express()
const port: number = parseInt(process.env.PORT || '8000', 10)

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/schools', schoolRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
}) 