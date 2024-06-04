// Write your code here
import './index.css'

const MatchCard = props => {
  const {latestMatchDetails} = props
  const newColor = latestMatchDetails.matchStatus === 'Won' ? 'green' : 'red'

  return (
    <div className="sub-last-container">
      <img
        src={latestMatchDetails.competingTeamLogo}
        alt="some"
        className="logo"
      />
      <p className="para">{latestMatchDetails.competingTeam}</p>
      <p className="para">{latestMatchDetails.result}</p>
      <p className={`para ${newColor}`}>{latestMatchDetails.matchStatus}</p>
    </div>
  )
}

export default MatchCard
