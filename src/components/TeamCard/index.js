// Write your code here
import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {teamImageUrl, name} = matchDetails
  return (
    <div className="teamCard-container">
      <img src={teamImageUrl} alt={name} className="logo-sizing" />
      <h1 className="team-card-heading">{name}</h1>
    </div>
  )
}

export default TeamCard
