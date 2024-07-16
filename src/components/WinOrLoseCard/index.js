import './index.css'

const WinOrLoseCard = props => {
  const {message, description, score, winOrLoseImg, onClickPlayAgain} = props
  const onClickplayAgainButton = () => {
    onClickPlayAgain()
  }
  return (
    <div className="win-or-lose-container">
      <div className="description-container">
        <h1 className="result-heading">{message}</h1>
        <p className="result-description">{description}</p>
        <p className="result-score">
          {score}/12
        </p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickplayAgainButton}
        >
          Play Again
        </button>
      </div>
      <img src={winOrLoseImg} alt="win or lose" className="win-or-lose-img" />
    </div>
  )
}

export default WinOrLoseCard
