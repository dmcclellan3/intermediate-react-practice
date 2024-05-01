export const initialTeamState = {
    team: [],
  };

const teamReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PLAYER':
        return {
          ...state,
          players: [...state.players, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default teamReducer;