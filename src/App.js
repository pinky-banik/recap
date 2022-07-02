import Header from './Component/Header';
import Home from './Component/Home';
import {Routes,Route} from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import Orders from './Component/Orders';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={<RequireAuth><Orders></Orders></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
