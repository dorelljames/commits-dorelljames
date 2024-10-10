'use client'

import { createContact } from '@/app/actions'
import { Button } from '@/components/Button'
import { useId } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" arrow aria-disabled={pending}>
      Get updates
    </Button>
  )
}

export function SignUpForm() {
  let id = useId()
  const [state, formAction] = useFormState(createContact, initialState)

  return (
    <div className="mt-8">
      {state.message && (
        <p className="mb-1 text-sm text-sky-300">{state.message}</p>
      )}
      <form
        action={formAction}
        className="relative isolate flex items-center pr-1"
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          required
          type="email"
          autoComplete="email"
          name="email"
          id={id}
          placeholder="Email address"
          className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
        />
        <SubmitButton />
        <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
        <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
      </form>
    </div>
  )
}
