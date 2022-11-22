import { withRouter } from 'next/router'
import Seo from '../components/Seo'

//파일명 대괄호 = 동적인 주소 사용가능
function Detail({ params }) {
  const [title, id, img, overview] = params || []
  console.log(params)
  return (
    <div>
      <Seo title={title} />
      {/* <img src={img} alt={title} /> */}
      <h4>{title || 'Loading'}</h4>
      {/* <p>{overview}</p> */}
    </div>
  )
}
export default withRouter(Detail)

//router는 프론트에서 실행
//url을 통해 내용 가져옴
export function getServerSideProps({ params: { params } }) {
  // console.log(params)
  return {
    props: {
      params,
    },
  }
}
