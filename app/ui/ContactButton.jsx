'use client'
import { usePathname, useRouter } from 'next/navigation'

function ContactButton({ href }) {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = href === pathname
  function handleClick() {
    router.push('/contact')
  }
  return (
    <button
      className={isActive ? 'text-red-400 border-b-2 border-b-red-400' : ''}
      onClick={handleClick}
    >
      Contact
    </button>
  )
}

export default ContactButton
