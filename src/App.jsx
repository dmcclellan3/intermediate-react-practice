import { Link } from "react-router-dom"
import React, { useContext } from 'react'
import { teamContext} from './main'


const TeamSummary = () => {
  const { state } = useContext(teamContext);

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
      <ul>
        {state.players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  )
}


export default App
