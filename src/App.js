import './App.css';
import Navbar from './Components/navbar/navbar.component';
import Home from './Routes/Home/home.component';
import Project from './Routes/Project/project.component';
import Team from './Routes/Team/team.component';
import ToDo from './Routes/To-Do/toDo.component';
import Profile from './Routes/Profile/profile.component';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}> 
          <Route index element={<Home/>}/>
          <Route path='todo' element={<ToDo/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='team' element={<Team/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
