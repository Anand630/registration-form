import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    firstNameFieldEmpty: false,
    lastNameFieldEmpty: false,
  }

  onFillAnotherForm = () => this.setState({isSubmitted: false})

  onDataSubmission = e => {
    const {firstName, lastName} = this.state
    e.preventDefault()

    if (firstName === '' && lastName === '') {
      this.setState({firstNameFieldEmpty: true, lastNameFieldEmpty: true})
    } else if (firstName === '') {
      this.setState({firstNameFieldEmpty: true})
    } else if (lastName === '') {
      this.setState({lastNameFieldEmpty: true})
    } else {
      this.setState({isSubmitted: true})
    }
  }

  handleFirstNameInputField = e => {
    if (e.target.value === '') {
      this.setState({firstNameFieldEmpty: true, firstName: e.target.value})
    } else {
      this.setState({firstNameFieldEmpty: false, firstName: e.target.value})
    }
  }

  handleLastNameInputField = e => {
    if (e.target.value === '') {
      this.setState({lastNameFieldEmpty: true, lastName: e.target.value})
    } else {
      this.setState({lastNameFieldEmpty: false, lastName: e.target.value})
    }
  }

  getRegistrationForm = () => {
    const {firstNameFieldEmpty, lastNameFieldEmpty} = this.state

    const firstNameFieldClassName = firstNameFieldEmpty
      ? 'empty-first-name-input-field'
      : 'first-name-input-field'
    const lastNameFieldClassName = lastNameFieldEmpty
      ? 'empty-last-name-input-field'
      : 'last-name-input-field'

    return (
      <>
        <h1 className="registration-heading">Registration</h1>
        <form onSubmit={this.onDataSubmission} className="form">
          <div className="first-name-label-input-container">
            <label htmlFor="first name" className="label">
              FIRST NAME
            </label>
            <input
              onBlur={this.handleFirstNameInputField}
              id="first name"
              className={firstNameFieldClassName}
              type="text"
              placeholder="First name"
            />
            {firstNameFieldEmpty && <p className="error-message">Required</p>}
          </div>
          <div className="last-name-label-input-container">
            <label htmlFor="last name" className="label">
              LAST NAME
            </label>
            <input
              onBlur={this.handleLastNameInputField}
              id="last name"
              className={lastNameFieldClassName}
              type="text"
              placeholder="Last name"
            />
            {lastNameFieldEmpty && <p className="error-message">Required</p>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </>
    )
  }

  getSubmittedAcknowledgement = () => (
    <div className="submission-acknowledgement-container">
      <img
        className="green-tick-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submission-status-text">Submitted Successfully</p>
      <button
        onClick={this.onFillAnotherForm}
        type="button"
        className="submit-another-response-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="home-container">
        {isSubmitted
          ? this.getSubmittedAcknowledgement()
          : this.getRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
