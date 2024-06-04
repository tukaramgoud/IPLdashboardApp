// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  return (
    <div className="latest-matches-container">
      <div className="one">
        <h1 className="heading">{latestMatchDetails.competingTeam}</h1>
        <h1 className="heading">{latestMatchDetails.date}</h1>
        <h1 className="heading">{latestMatchDetails.venue}</h1>
        <h1 className="heading">{latestMatchDetails.result}</h1>
      </div>
      <div className="two">
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={latestMatchDetails.competingTeam}
          className="image-logo"
        />
      </div>
      <div className="one">
        <h1 className="heading">
          first Innings <br /> {latestMatchDetails.firstInnings}
        </h1>
        <h1 className="heading">
          second Innings
          <br /> {latestMatchDetails.secondInnings}
        </h1>
        <h1 className="heading">
          Man of the Match <br /> {latestMatchDetails.manOfTheMatch}
        </h1>
        <h1 className="heading">
          Umpires <br /> {latestMatchDetails.umpires}
        </h1>
      </div>
    </div>
  )
}

export default LatestMatch
