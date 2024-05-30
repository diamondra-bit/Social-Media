
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Message from './pages/Message';
import Publication from './pages/Publication'
import Layout from './pages/Layout/Layout';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div className='App'>
      {/* <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          
        </Routes>
      </BrowserRouter> */}

    <Layout/>
      
    </div>
  );
}

export default App;
