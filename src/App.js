import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Home from './pages/Home.jsx';
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct.jsx"
import Cart from "./pages/Cart.jsx"
import FindProduct from "./pages/FindProduct.jsx"
import Pay from "./pages/Pay.jsx"
import ProductInfor from "./pages/ProductInfor.jsx"
import Signout from "./pages/Signout.jsx"
import Signup from "./pages/Signup.jsx"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <a href="./"></a>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/addproduct" element={<AddProduct></AddProduct>} />
        <Route path="/yourcart" element={<Cart></Cart>} />
        <Route path="/findproduct" element={<FindProduct></FindProduct>} />
        <Route path="/payment" element={<Pay></Pay>} />
        <Route path="/productinfor" element={<Home />} exact/>
        <Route path="/productinfor/:id" element={<ProductInfor />} />
        {/* <Route path="/productinfor" element={<ProductInfor></ProductInfor>} /> */}
        <Route path="/signout/:name" element={<Signout></Signout>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
