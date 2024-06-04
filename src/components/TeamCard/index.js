// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {teamImageUrl, name, id} = matchDetails
    return (
      <Link to={`/matches/${id}`} className="nav-link">
        <div className="teamCard-container">
          <img src={teamImageUrl} alt={name} className="logo-sizing" />
          <h1 className="team-card-heading">{name}</h1>
        </div>
      </Link>
    )
  }
}

export default TeamCard
