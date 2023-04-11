import './index.css'

const EmojiCard = props => {
  const {emojiDetails, addEmojiId} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const emojiUniqueId = () => {
    addEmojiId(id)
  }

  return (
    <li className="emoji-can">
      <button className="emoji-btn" onClick={emojiUniqueId} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
