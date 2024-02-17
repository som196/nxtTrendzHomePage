import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="render-password-container">
        <label htmlFor="password" className="password-label">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          id="password"
          className="password-input"
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="render-username-container">
        <label htmlFor="username" className="username-label">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          id="username"
          placeholder="Username"
          className="username-input"
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onFailureLogin(data.error_msg)
      console.log(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="webiste-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="logo-img"
              alt="website logo"
            />
          </div>
          <div>{this.renderUsername()}</div>
          <div>{this.renderPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
