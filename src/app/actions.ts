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

  try {
    fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          email,
        },
      }),
    })

    revalidatePath('/')
    return { message: 'Awesome! Expect some updates in your inbox soon... 🦖' }
  } catch (error) {
    return {
      message: 'Failed to get sign up!',
    }
  }
}
