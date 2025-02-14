
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
    </Routes>
   </BrowserRouter>
  )
}
