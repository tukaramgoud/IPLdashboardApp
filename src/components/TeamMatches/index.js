// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  componentDidMount = () => {
    this.fetchEachMatchDetails()
  }

  fetchEachMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fetchData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const result = await fetchData.json()
    console.log(result)

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
    console.log(newResult)
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    )
  }
}

export default TeamMatches
