import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import Registration from './components/Registration';
import ViewMyBlog from './components/ViewMyBlog';
import ViewAllBlog from './components/ViewAllBlog';
import Login from './components/Login';
import User from './components/User';
import Delete from './components/Delete';


function App() {
  return (
    <div >


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='add' element={<AddBlog/>}/>
          <Route path='register' element={<Registration/>}/>
          <Route path='view' element={<ViewMyBlog/>}/>
          <Route path='viewall' element={<ViewAllBlog/>}/>
          <Route path='profile' element={<User/>}/>
          <Route path='delete' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>


     
    </div>
  );
}

export default App;
