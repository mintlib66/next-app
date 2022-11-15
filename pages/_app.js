//nextJs는 index전에 app먼저 확인
import NavBar from './components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  )
}
