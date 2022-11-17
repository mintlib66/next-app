import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  div {
    display: flex;
    gap: 10px;
  }
  img {
    max-width: 100px;
    margin-bottom: 5px;
  }
  a {
    color: black;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
  }
  a.active {
    color: blue;
  }
`
export default function NavBar() {
  const router = useRouter()
  return (
    <StyledNav>
      <img src="/vercel.svg" alt="logo img" />
      <div>
        <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
          <span>Home</span>
        </Link>
        <Link
          href="/about"
          className={router.pathname === '/about' ? 'active' : ''}
        >
          About
        </Link>
      </div>
      {/* <style jsx>{style}</style> */}
    </StyledNav>
  )
}
