import { useId } from 'react'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return <span>COMMIT</span>
}
