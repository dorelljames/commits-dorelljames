'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})

export async function createContact(
  prevState: { message: string },
  formData: FormData,
) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      message:
        "Oh no, we can't sign you up. Please check your email and try again.",
    }
  }

  const { email } = validatedFields.data
  const formId = '7873837' // Replace with your ConvertKit Form ID if different
  const apiKey = process.env.CONVERTKIT_API_KEY // Read API Key from environment variable

  // Add a check to ensure the API key is available
  if (!apiKey) {
    console.error('ConvertKit API Key is missing from environment variables.')
    return {
      message: 'Configuration error. Please contact support.',
    }
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
        }),
      },
    )

    if (!response.ok) {
      // Log the error response from ConvertKit for debugging
      const errorData = await response
        .json()
        .catch(() => ({ message: 'Failed to parse error response' }))
      console.error('ConvertKit API Error:', errorData)
      throw new Error(
        `ConvertKit API request failed with status ${response.status}`,
      )
    }

    revalidatePath('/')
    return {
      message:
        'Awesome! Please check your inbox to confirm your subscription. 🦖',
    }
  } catch (error) {
    console.error('ConvertKit Error:', error) // Log the actual error
    return {
      message: 'Failed to sign you up. Please try again later.', // Updated error message
    }
  }
}
