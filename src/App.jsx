import { Link } from "react-router-dom"
import { useReducer } from "react"

const initialState = {
  //What to place here for the page?
}

const Title = () => {
  return (
    <h1 className="d-flex justify-content-center">
     Team Summary
    </h1>
  )
}

function App() {
  return (
    <div className="p-5">
      <Link to='./EditTeam'>Edit Team</Link>
      <Title />
      <h2 className="d-flex justify-content-center mb-5"></h2>
      <form>
        <label>Player name:
        <input type="text" />
        </label>
      </form>
      <form>
        <label>Player name:
        <input type="text" />
        </label>
      </form>
      <form>
        <label>Player name:
        <input type="text" />
        </label>
      </form>
      <form>
        <label>Player name:
        <input type="text" />
        </label>
      </form>
    </div>
  )
}


export default App
