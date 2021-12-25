
import "./app.scss";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

const App = () => {
  const user=true;
  const [activeMenu,setActiveMenu]=useState('no-active');
  const clickMenuNav=(e)=>{
    setActiveMenu(e==="active"?"no-active":"active");
  }
  return (
    <Router>
       <div className="bodyWrapper">
      <Topbar onClickMenuNav={clickMenuNav} />
      <div className="container">
      <Sidebar  show={activeMenu}/>
        <Switch>
      <Route exact path="/"component={() => user?(<Home />):(<Redirect to="/" />)} />
      <Route exact path="/users"component={() => user?(<UserList />):(<Redirect to="/" />)} />
      <Route exact path="/user/:id"component={() => user?(<User />):(<Redirect to="/" />)} />
      <Route exact path="/newUser"component={() => user?(<NewUser />):(<Redirect to="/" />)} />
      <Route exact path="/products"component={() => user?(<ProductList />):(<Redirect to="/" />)} />
      <Route exact path="/product/:id"component={() => user?(<Product />):(<Redirect to="/" />)} />
      <Route exact path="/newProduct"component={() => user?(<NewProduct />):(<Redirect to="/" />)} />
    </Switch>
    </div>
    </div>
  </Router>
  );
};

export default App;
