// Write your code here
import './index.css'

const MatchCard = props => {
  const {latestMatchDetails} = props
  return (
    <div className="sub-last-container">
      <img
        src={latestMatchDetails.competingTeamLogo}
        alt="some"
        className="logo"
      />
      <p>{latestMatchDetails.competingTeam}</p>
      <p>{latestMatchDetails.competingTeam}</p>
      <p>{latestMatchDetails.matchStatus}</p>
    </div>
  )
}

export default MatchCard
