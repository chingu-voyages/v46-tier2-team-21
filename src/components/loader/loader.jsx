import chefHat from '/assets/chefhat.svg'
import './loader.css'

export default function Loader() {
  return (
    <div className="loader-container">
      <p>finding recipes...</p>
      <div className="icon"><img src={chefHat}></img></div>
    </div>
  )
}