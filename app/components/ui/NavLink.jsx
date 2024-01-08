'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ href, ...rest }) {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      className={isActive ? 'text-red-400 border-b-red-400 border-b-2' : ''}
      href={href}
      {...rest}
    />
  )
}

export default NavLink
