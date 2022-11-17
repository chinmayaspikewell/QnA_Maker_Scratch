import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter,Route,Router } from 'react-router-dom';
// import Login from './pages/login/Login';
// import SignUp from './pages/signUp/SignUp';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Router>
        <Route index element ={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Router>
    </BrowserRouter> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
