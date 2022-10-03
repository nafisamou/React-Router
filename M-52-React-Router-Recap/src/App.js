import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/header" element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
