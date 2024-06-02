// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
// import { async } from 'fast-glob'/\

class Home extends Component {
  state = {matches: []}

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
    console.log(newResult)

    this.setState({matches: newResult})
  }

  render() {
    const {matches} = this.state
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
          {matches.map(eachOne => (
            <TeamCard matchDetails={this.eachOne} key={eachOne.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Home
