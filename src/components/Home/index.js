// Write your JS code here

import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = props => {
  // eslint-disable-next-line
  const {item} = props
  return (
    <>
      <Header />
      <div className="c1">
        <h1 className="heading1">Home Route</h1>
      </div>
      <LogoutButton />
    </>
  )
}
export default Home
