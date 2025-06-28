import { Router } from 'express'
import { createSchool, getSchools } from '../controllers/schools'
import { upload } from '../middleware/upload'

const router = Router()

router.post('/', upload.single('logo'), createSchool)
router.get('/', getSchools)

export default router 