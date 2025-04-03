'use client'

import { createContact } from '@/app/actions'
import { Button } from '@/components/Button'
import { useId } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

// Simple loading spinner component
function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`-ml-1 mr-2 h-4 w-4 animate-spin text-white ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      arrow={!pending}
      aria-disabled={pending}
      className={pending ? 'cursor-wait' : ''}
    >
      {pending ? (
        <div className="flex items-center">
          <LoadingSpinner />
          <span>Just a sec...</span>
        </div>
      ) : (
        'Get updates'
      )}
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
