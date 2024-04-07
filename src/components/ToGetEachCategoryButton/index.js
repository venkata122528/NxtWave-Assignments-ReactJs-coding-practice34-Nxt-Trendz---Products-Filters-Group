import './index.css'

const ToGetEachCategoryButton = props => {
  const {eachCategory, onClickCategory} = props
  const {name, categoryId} = eachCategory

  const onClickButton = () => {
    onClickCategory(categoryId)
  }

  return (
    <li className="eachCategoryListItem">
      <button type="button" onClick={onClickButton} className="button">
        <p>{name}</p>
      </button>
    </li>
  )
}

export default ToGetEachCategoryButton
