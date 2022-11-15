import Link from 'next/link'
import Router, { useRouter } from 'next/router'

const style = `
        nav {
          margin:0.5rem;
        }
        a {
          text-decoration: none;
          margin-right:0.5rem;
        }
        .active {
          color: blue;
        }
      `
export default function NavBar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
        <span>Home</span>
      </Link>
      <Link
        href="/about"
        className={router.pathname === '/about' ? 'active' : ''}
      >
        About
      </Link>
      <style jsx>{style}</style>
    </nav>
  )
}
