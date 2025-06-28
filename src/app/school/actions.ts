'use server'

import { revalidatePath } from 'next/cache'

interface CreateSchoolData {
  name: string
  logo?: File
}

export async function createSchool(data: CreateSchoolData) {
  try {
    const formData = new FormData()
    formData.append('name', data.name)
    
    if (data.logo) {
      formData.append('logo', data.logo)
    }

    const response = await fetch(`${process.env.API_URL}/schools`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to create school')
    }

    const school = await response.json()
    revalidatePath('/school')
    return { success: true, data: school }
  } catch (error) {
    console.error('Error in createSchool:', error)
    return { success: false, error: 'Failed to create school' }
  }
} 