import { withRouter } from 'next/router'

//파일명 대괄호 = 동적인 주소 사용가능
function Detail({ router: { query } }) {
  return (
    <div>
      <img src={query.img} alt={query.title} />
      <h4>{query.title || 'Loading'}</h4>
      <p>{query.overview}</p>
    </div>
  )
}
export default withRouter(Detail)
