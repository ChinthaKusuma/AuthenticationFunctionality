// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  // eslint-disable-next-line
  const {item} = props
  return (
    <div className="one">
      <nav className="nav_container">
        <Link to="/">
          <li className="two">Home</li>
        </Link>
        <Link to="/about">
          <li className="two">About</li>
        </Link>
      </nav>
    </div>
  )
}
export default Header
