// Write your JS code here
import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  // eslint-disable-next-line
  state = {username: 'rahul', password: 'rahul@2021'}

  onSubmitSucess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  submit1 = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bgContainer">
        <h1 className="heading">Please Login</h1>
        <button className="btn1" type="button" onClick={this.submit1}>
          Login with sample creds
        </button>
      </div>
    )
  }
}
export default Login
