import multer from 'multer'
import path from 'path'
import type { Request } from 'express'

interface MulterCallback {
  (error: Error | null, destination: string): void
}

interface FileFilterCallback {
  (error: Error | null, acceptFile: boolean): void
}

const storage = multer.diskStorage({
  destination: function (_req: Request, _file: Express.Multer.File, cb: MulterCallback) {
    cb(null, 'uploads/')
  },
  filename: function (_req: Request, file: Express.Multer.File, cb: MulterCallback) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

export const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 // 1MB
  },
  fileFilter: function (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'), false)
    }
    cb(null, true)
  }
}) 