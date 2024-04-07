import ToGetEachRatingButton from '../ToGetEachRatingButton'
import ToGetEachCategoryButton from '../ToGetEachCategoryButton'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onClickCategory,
    onClickRating,
    onClickClearFilters,
    onTitleSearch,
  } = props

  const onClickClearFiltersButton = () => {
    onClickClearFilters()
  }

  const knowEnterPressed = event => {
    if (event.key === 'Enter') {
      onTitleSearch(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <input type="search" placeholder="Search" onKeyDown={knowEnterPressed} />
      <h1>Category</h1>
      <ul>
        {categoryOptions.map(eachCategory => (
          <ToGetEachCategoryButton
            eachCategory={eachCategory}
            key={eachCategory.categoryId}
            onClickCategory={onClickCategory}
          />
        ))}
      </ul>
      <ul>
        {ratingsList.map(eachRating => (
          <ToGetEachRatingButton
            eachRating={eachRating}
            key={eachRating.ratingId}
            onClickRating={onClickRating}
          />
        ))}
      </ul>
      <button
        type="button"
        onClick={onClickClearFiltersButton}
        className="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
