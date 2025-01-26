import { useRoutes } from 'react-router-dom'
import AppRoute from './routes/AppRoute'

function App() {
  const element = useRoutes(AppRoute)
  return (
    <>
      {element}   
    </>
  )
}

export default App
