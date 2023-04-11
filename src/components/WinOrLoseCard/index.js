import './index.css'

const WinOrLoseCard = props => {
  const {isWin, score, playAgain} = props
  const winUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const lostUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imgUrl = isWin ? winUrl : lostUrl
  const LoseOrWin = isWin ? 'You Won' : 'You Lose'
  const scoreLabel = isWin ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-can">
      <div className="win-loss-text-card">
        <h1 className="lose-win-head">{LoseOrWin}</h1>
        <p className="score-head">
          {scoreLabel} <br />
          <p className="score-count">{score}/12</p>
        </p>
        <button onClick={playAgain} className="try-again-button" type="button">
          Play Again
        </button>
      </div>
      <div className="image-section-container">
        <img className="win-loss-img" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
