import { useEffect, useState } from 'react'
import Seo from './components/Seo'

//results 서버사이드에서 받아옴
export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map(movie => (
        <div key={movie.id}>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.title}
          />
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}
//next js는 프레임워크

//서버사이드 렌더링(함수명 변경x) - 서버 사이드에서만 실행
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json()
  return {
    props: {
      results,
    },
  }
}
