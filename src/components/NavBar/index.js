import './index.css'

const NavBar = props => {
  const {topScore, isGameInProgress, currentScore} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-can">
        <div className="logo-can">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-can">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
