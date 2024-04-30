import { Link } from "react-router-dom"
import { useReducer } from "react"

const initialState = {
  //What to place here for the page?
}

const Title = () => {
  return (
    <h1 className="d-flex justify-content-center">
      Enter Player
    </h1>
  )
}

function EditTeam() {
  return (
    <div className="p-5">
      <Link to='/'>Team Summary</Link>
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


// export default EditTeam

















export default EditTeam