import express from 'express'
import cors from 'cors'
import path from 'path'
import { config } from 'dotenv'
import schoolRouter from './routes/schools'

// Load environment variables from src/api/.env
config({ path: path.join(__dirname, '.env') })

const app = express()
const port = parseInt(process.env.PORT || '8000', 10)

// Middleware
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

// Routes
app.use('/api/v1/schools', schoolRouter)

// Error handling
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something broke!' })
})

app.listen(port, () => {
  console.log(`🚀 API Server running on http://localhost:${port}`)
}) 