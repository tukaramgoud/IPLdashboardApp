// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
// import {match} from 'assert'
// import { async } from 'fast-glob'/\

class Home extends Component {
  state = {matches: [], isLoading: true}

  componentDidMount = () => {
    this.getMatches()
  }

  getMatches = async () => {
    const fetchingData = await fetch('https://apis.ccbp.in/ipl')
    const result = await fetchingData.json()
    const {teams} = result

    const newResult = teams.map(eachOne => ({
      id: eachOne.id,
      name: eachOne.name,
      teamImageUrl: eachOne.team_image_url,
    }))

    this.setState({matches: newResult, isLoading: false})
  }

  render() {
    const {matches, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="matches-container">
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} />
          ) : (
            matches.map(eachOne => (
              <TeamCard matchDetails={eachOne} key={eachOne.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}
export default Home
