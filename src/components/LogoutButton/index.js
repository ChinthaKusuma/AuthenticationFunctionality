// Write your JS code here
import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="btn2">
      <button className="btn1" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
