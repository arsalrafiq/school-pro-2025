import { Request } from 'express'

export interface SchoolData {
  name: string
  logo?: string
}

export interface CreateSchoolRequest extends Request {
  body: SchoolData
  file?: Express.Multer.File
} 