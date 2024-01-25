import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({selectedCapital: event.target.value})
  }

  getCountry = () => {
    const {selectedCapital} = this.state
    const selectedObject = countryAndCapitalsList.find(
      each => each.id === selectedCapital,
    )
    return selectedObject.country
  }

  render() {
    return (
      <div className="capitals-bg-container">
        <div className="capitals-app-container">
          <h1 className="capitals-app-heading">Countries And Capitals</h1>
          <div className="capitals-question-container">
            <select
              className="capitals-select-container"
              onChange={this.onChangeOption}
            >
              {countryAndCapitalsList.map(each => (
                <option
                  key={each.id}
                  value={each.id}
                  className="capitals-option"
                >
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capitals-question-text">
              is capital of which country?
            </p>
          </div>
          <p className="capitals-country-name">{this.getCountry()}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
