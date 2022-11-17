import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
//import QnA from "./components/qna/QnA";
import "./App.css";
//import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import { BrowserRouter as Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Admin from "./pages/admin/Admin";
import Test from "./pages/test/Test";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signUp/SignUp";
import Notifications from "./pages/notification/Notifications";
import Issue from "./pages/issue/Issue";
//import AppHome from "./pages/app/AppHome";
//import {useState} from "react";


function App() {

  
  return (
    <div >
    <Router>
  
      <Topbar />
      <div className="container" >
      <Sidebar />
        <Route path='/test'>
          <Test/>
      </Route>
        <Route path="/notifications">
            <Notifications />
          </Route>   
          <Route path="/issue">
            <Issue />
          </Route> 
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          {/* <Route path="/products">
            <ProductList />
          </Route> */}
          {/* <Route path="/sensors">
            <SensorsList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route> */}
          
        </Switch>
          
        </div>
      
    </Router>
    </div>
  )

  }
export default App;
