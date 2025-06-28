import multer from 'multer'
import path from 'path'
import type { Request } from 'express'

const storage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb) => {
    cb(null, path.join(process.cwd(), 'uploads'))
  },
  filename: (_req: Request, file: Express.Multer.File, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`)
  }
})

export const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 // 1MB
  },
  fileFilter: (_req: Request, file: Express.Multer.File, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (extname && mimetype) {
      return cb(null, true)
    }
    cb(new Error('Only image files are allowed!'))
  }
}) 