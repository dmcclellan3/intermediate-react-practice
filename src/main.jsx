import React from 'react';
import { createContext, useReducer } from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'




// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import App from './App'
import EditTeam from './EditTeam'
import ErrorPage from './ErrorPage'

import { initialTeamState } from './team-reducer';
import { teamReducer } from './team-reducer';

export const TeamContext = createContext(null);

const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialTeamState);
  return (
    <TeamContext.Provider value={{ state, dispatch }}>
      {children}
    </TeamContext.Provider>
  );
};


function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/EditTeam',
        element: <EditTeam />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
