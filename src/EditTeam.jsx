import { Link } from "react-router-dom"
import { TeamContext } from "./main"
import { useContext, useState } from "react"

const initialState = {
  players : [],
}



const Title = () => {
  return (
    <h1 className="d-flex justify-content-center">
      Enter Player
    </h1>
  )
}

const AddPlayerForm = () => {
  const { dispatch } = useContext(TeamContext);
  const [playerName, setPlayerName] = useState('');
  }
  const handleAddPlayer = () => {
    dispatch({ type: 'ADD_PLAYER', payload: playerName });
    setPlayerName('');
  };

function EditTeam() {
  return (
    <div className="p-5">
      <Link to='/'>Team Summary</Link>
      <Title />
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter player name"
      />
      <button onClick={handleAddPlayer}>Add Player</button>
    </div>
  )
}


export default EditTeam