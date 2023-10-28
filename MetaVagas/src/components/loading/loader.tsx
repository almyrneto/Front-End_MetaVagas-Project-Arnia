import Loading from '../../assets/icons/loading.svg'
import { ContainerLoader, LoaderStyle } from '../bannerLogin/styled'


function Loader() {
  return (
    <ContainerLoader>
      <LoaderStyle src={Loading} />
    </ContainerLoader>
  )
}

export default Loader