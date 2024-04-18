// Write your code here

import './index.css'

const AppItem = props => {
  const {searching} = props

  const onSearching = () => {
    searching(event)
  }

  return (
    <div className="header-container">
      <h1 className="heading">App Store</h1>
      <div className="input-container">
        <input
          type="search"
          className="input"
          placeholder="Search"
          onChange={onSearching}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png "
          className="search-icon"
          alt="search icon"
        />
      </div>
    </div>
  )
}
export default AppItem
