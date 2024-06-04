// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: [], isLoading: true}

  componentDidMount = () => {
    this.fetchEachMatchDetails()
  }

  fetchEachMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fetchData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const result = await fetchData.json()
    // console.log(result)

    const newResult = {
      latestMatchDetails: {
        competingTeam: result.latest_match_details.competing_team,
        competingTeamLogo: result.latest_match_details.competing_team_logo,
        date: result.latest_match_details.date,
        firstInnings: result.latest_match_details.first_innings,
        id: result.latest_match_details.id,
        manOfTheMatch: result.latest_match_details.man_of_the_match,
        matchStatus: result.latest_match_details.match_status,
        result: result.latest_match_details.result,
        secondInnings: result.latest_match_details.second_innings,
        umpires: result.latest_match_details.umpires,
        venue: result.latest_match_details.venue,
      },
      recentMatches: result.recent_matches.map(one => ({
        competingTeam: one.competing_team,
        competingTeamLogo: one.competing_team_logo,
        date: one.date,
        id: one.id,
        manOfMatch: one.man_of_the_match,
        matchStatus: one.match_status,
        result: one.result,
        secondInnings: one.second_innings,
        umpires: one.umpires,
        venue: one.venue,
      })),
      url: result.team_banner_url,
    }
    // console.log(newResult)
    this.setState({matchDetails: newResult, isLoading: false})
  }

  render() {
    const {matchDetails, isLoading} = this.state
    console.log(matchDetails)
    const {latestMatchDetails, recentMatches, url} = matchDetails
    return (
      <div className="sub-main-container">
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <div>
              <img src={url} alt="some" className="image-sizing" />
            </div>
            <div className="new">
              <h1 className="first-heading">Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <div className="last-container">
              {recentMatches.map(one => (
                <MatchCard latestMatchDetails={one} key={one.id} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
