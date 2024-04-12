import AppRouter from './appRouter'
import { RouterProvider } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
      <div className="app_container">
        <RouterProvider router={AppRouter} />
      </div>
    </>
  )
}

export default App
