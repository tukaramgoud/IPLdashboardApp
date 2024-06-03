// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  return (
    <div className="latest-matches-container">
      <div className="one">
        <h1>{latestMatchDetails.competingTeam}</h1>
        <h1>{latestMatchDetails.date}</h1>
        <h1>{latestMatchDetails.venue}</h1>
        <h1>{latestMatchDetails.result}</h1>
      </div>
      <div className="two">
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={latestMatchDetails.competingTeam}
          className="image-logo"
        />
      </div>
      <div className="one">
        <h1>{latestMatchDetails.competingTeam}</h1>
        <h1>{latestMatchDetails.date}</h1>
        <h1>{latestMatchDetails.venue}</h1>
        <h1>{latestMatchDetails.result}</h1>
      </div>
    </div>
  )
}

export default LatestMatch
