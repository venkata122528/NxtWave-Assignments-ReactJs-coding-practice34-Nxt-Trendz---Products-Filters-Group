import './index.css'

const ToGetEachRatingButton = props => {
  const {eachRating, onClickRating} = props
  const {ratingId, imageUrl} = eachRating

  const onClickButton = () => {
    onClickRating(ratingId)
  }

  return (
    <li className="eachRatingContainer">
      <button type="button" onClick={onClickButton} className="button">
        <div className="ratingImageTextContainer">
          <img
            src={imageUrl}
            alt={`rating ${ratingId}`}
            className="ratingImage"
          />
          <p> & up</p>
        </div>
      </button>
    </li>
  )
}

export default ToGetEachRatingButton
