import {Component} from 'react'

import NavBar from '../NavBar'

import './index.css'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

const shuffledEmojisList = emojisList => {
  return emojisList.sort(() => Math.random() - 0.5)
}

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojisId: [], gameStatus: 'playing'}

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisId} = this.state

    const isEmojiPresent = clickedEmojisId.includes(id)
    const clickedEmojisLength = clickedEmojisId.length

    if (isEmojiPresent) {
      this.FinishGameAndSetTopScore(clickedEmojisLength, false)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.FinishGameAndSetTopScore(emojisList.length, true)
      } else {
        this.setState(preState => ({
          clickedEmojisId: [...preState.clickedEmojisId, id],
          score: preState.score + 1,
        }))
      }
    }
  }

  FinishGameAndSetTopScore = (finalScore, hasWon) => {
    this.setState(preState => ({
      topScore: Math.max(preState.topScore, finalScore),
      gameStatus: hasWon ? 'win' : 'lose',
    }))
  }

  onClickPlayAgain = () => {
    this.resetGame()
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojisId: [],
      gameStatus: 'playing',
    })
  }

  render() {
    const {emojisList} = this.props
    const shuffledList = shuffledEmojisList(emojisList)
    const {score, topScore, gameStatus} = this.state

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus}/>

        {gameStatus === 'playing' ? (
          <ul className="emoji-cards-container">
            {shuffledList.map(eachEmoji => (
              <EmojiCard
                details={eachEmoji}
                key={eachEmoji.id}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            message={gameStatus === 'win' ? 'You won' : 'You Lose'}
            description={gameStatus === 'win' ? 'Best Score' : 'Score'}
            score={gameStatus === 'win' ? '12' : score}
            winOrLoseImg={
              gameStatus === 'win'
                ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
            }
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
