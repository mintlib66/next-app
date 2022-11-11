import Link from 'next/link'
import Router from 'next/router'

export default function NavBar() {
  return (
    <nav>
      <Link
        href="/"
        className="hello"
        style={{ color: Router.pathname === '/' ? 'red' : 'black' }}
      >
        Home
      </Link>
      <Link
        href="/about"
        style={{ color: Router.pathname === '/about' ? 'red' : 'black' }}
      >
        About
      </Link>
    </nav>
  )
}
