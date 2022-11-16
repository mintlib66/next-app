import NavBar from './NavBar'

//_app파일이 너무 커지지 않게 여기에 생성
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  )
}
