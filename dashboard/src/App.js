import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/pages/home/Home"
import UserList from "./components/pages/userList/UserList"
import Product from "./components/pages/product/Product"
import Category from "./components/pages/category/Category"
import ProductList from "./components/pages/productList/ProductList"
import './app.css'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import User from "./components/pages/user/User"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" element={ <Home />} />          
          <Route exact path="/users" element={ <UserList />} />
          <Route exact path="/user/:id" element={ <User />} />        
          <Route exact path="/products" element={ <ProductList />} />    
          <Route exact path="/product/:id" element={ <Product/>} />     
          <Route exact path="/categories" element={ <Category/>} />     
        </Switch>
      </div>
    </Router>
  );
}

export default App;
