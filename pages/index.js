import { useEffect, useState } from 'react'
import Seo from './components/Seo'

const API_KEY = '5b2f4d0329c778a5838cfa5870be7d03'

export default function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    ;(async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json()
      setMovies(results)
    })()
  }, [])

  return (
    <div>
      <Seo title="Home" />
      {movies.map(movie => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  )
}
//next js는 프레임워크
