import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>

      <ul
        className={`list-item-container ${
          gameStatus === 'win' ? 'hide-score' : ''
        }`}
      >
        <p className="navbar-listitem">
            Score: {score}
        </p>

        <p className="navbar-listitem">
            Top Score: {topScore}
        </p>
      </ul>
    </nav>
  )
}

export default NavBar
