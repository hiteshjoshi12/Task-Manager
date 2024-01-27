import './App.css'
import Login from './components/Login'
import Main from './components/Main'
import Signup from './components/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Signup />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/main' element = {<Main />} />
      </Routes>
    </Router>
    
  )
}

export default App
