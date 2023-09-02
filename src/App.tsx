import './App.css'
import Login from './pages/Login'
import {Route , Routes} from 'react-router-dom'
import Questions from './pages/Questions'
import Overview from './pages/Overview'
import Report from './pages/Report'
function App() {

  return (
    <>
    <Routes>
      <Route index path="/" element={<Login/>}/>
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/overview" element={<Overview/>}/>
      <Route path="/report" element={<Report/>}/>
    </Routes>
    </>
  )
}

export default App
