// Write your code here
// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list-item">
      <img src={imgUrl} className="list-image" alt={name} />
      <p className="list-paragraph">{name}</p>
    </li>
  )
}
export default DestinationItem
