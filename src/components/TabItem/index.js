// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, clickButton, isActive} = props
  const {tabId, displayText} = tabsList

  const onClicking = () => {
    clickButton(tabId)
  }

  const ActiveButtonClassName = isActive ? 'active-btn' : ''

  return (
    <div className="button-container">
      <li>
        <button
          className={`button ${ActiveButtonClassName}`}
          onClick={onClicking}
        >
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TabItem
