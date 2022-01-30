import Intro from '../src/components/intro/intro'
import About from '../src/components/about/about'
import ProductList from '../src/components/productList/ProductList'
import Contact from '../src/components/contact/Contact'
import Navbar from '../src/components/navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css'


function App() {
  return (
    <div>

          <Navbar />
          <Intro />
          <About />
          <ProductList />
          <Contact />
                     
    </div>
  );
}

export default App;
