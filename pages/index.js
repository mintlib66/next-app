import { useEffect, useState } from 'react'
import Seo from './components/Seo'

export default function Home() {
  const [movies, setMovies] = useState()
  useEffect(() => {
    ;(async () => {
      const { results } = await (await fetch(`/api/movies`)).json()
      setMovies(results)
    })()
  }, [])

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => (
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
