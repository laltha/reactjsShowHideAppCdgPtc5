import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  clickFirstname = () => {
    const {firstname} = this.state

    this.setState(() => ({firstname: !firstname}))
  }

  clickLastname = () => {
    const {lastname} = this.state

    this.setState(() => ({lastname: !lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>

        <div className="button-container">
          <div className="first-button-container">
            <button
              className="button"
              type="button"
              onClick={this.clickFirstname}
            >
              Show/Hide Firstname
            </button>
            {firstname ? <p className="name-style">Joe</p> : ''}
          </div>

          <div className="second-button-container">
            <button
              type="button"
              className="button"
              onClick={this.clickLastname}
            >
              Show/Hide Lastname
            </button>
            {lastname ? <p className="name-style">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
