import { useEffect, useState } from 'react'
import Link from 'next/link'
import Seo from './components/Seo'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100vw;
  margin-top: 4rem;

  a {
    width: 220px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 1rem;
  }
  h4 {
    color: black;
    text-align: center;
    text-decoration: none;
  }
`

//results 서버사이드에서 받아옴
export default function Home({ results }) {
  return (
    <StyledContainer>
      <Seo title="Home" />
      {results?.map(movie => (
        <Link
          key={movie.id}
          as={`/movies/${movie.title}/${movie.id}`}
          href={{
            pathname: `/movies/${movie.title}/${movie.id}`,
            query: {
              id: movie.id,
              title: movie.title,
              img: `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
              overview: movie.overview,
            },
          }}
        >
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.title}
          />
          <h4>{movie.title}</h4>
        </Link>
      ))}
    </StyledContainer>
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
