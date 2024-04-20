import { Routes, Route  } from 'react-router-dom'
import CreateActivities from './views/createActivities/CreateActivities'
import Activities from './views/activities/Activities'
import MainPage from "./views/mainPage/MainPage"
import Detail from "./views/detail/Detail"
import Home from "./views/home/Home"
import './App.css'

function App() {
 

  return (
    <div>
        
      <Routes>
        <Route path="/" element={ <MainPage/> }/>
        <Route path="/" element={ <MainPage/> }/>
        <Route exact path="/home" element={ <Home/> }/>
        <Route path="/home/:id" element={ <Detail/> }/>
        <Route path="/createActivities" element={ <CreateActivities/> }/>
        <Route path="/activities" element={ <Activities/> }/>
      </Routes>
     
    </div>

  )
}

export default App
