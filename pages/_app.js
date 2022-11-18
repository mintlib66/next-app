//nextJs는 index전에 app먼저 확인
import Layout from './components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
