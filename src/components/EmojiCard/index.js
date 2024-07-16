import './index.css'

const EmojiCard = props => {
  const {details, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = details
  const onClickEmojiCard = () => {
    onClickEmoji(id)
  }
  return (
      <li className="emoji-item-container">
            <button className="emoji-btn" type="button" onClick={onClickEmojiCard}>
              <img src={emojiUrl} alt={emojiName} className="emoji-img" />
            </button>
      </li>
  )
}

export default EmojiCard
