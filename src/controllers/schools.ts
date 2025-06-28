import { PrismaClient } from '@prisma/client'
import type { Request, Response } from 'express'

const prisma = new PrismaClient()

interface CreateSchoolRequest extends Request {
  body: {
    name: string
    logo?: string
  }
  file?: Express.Multer.File
}

export const createSchool = async (req: CreateSchoolRequest, res: Response) => {
  try {
    const { name } = req.body
    const logoPath = req.file?.path

    if (!name) {
      return res.status(400).json({ error: 'School name is required' })
    }

    const school = await prisma.school.create({
      data: {
        name,
        logo: logoPath || null,
      },
    })

    return res.status(201).json(school)
  } catch (error) {
    console.error('Error creating school:', error)
    return res.status(500).json({ error: 'Failed to create school' })
  }
}

export const getSchools = async (_req: Request, res: Response) => {
  try {
    const schools = await prisma.school.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return res.status(200).json(schools)
  } catch (error) {
    console.error('Error fetching schools:', error)
    return res.status(500).json({ error: 'Failed to fetch schools' })
  }
} 