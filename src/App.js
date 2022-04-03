import Intro from '../src/components/intro/intro'
import About from '../src/components/about/about'
import ProductList from '../src/components/productList/ProductList'
import Contact from '../src/components/contact/Contact'
import Navbar from '../src/components/navbar/Navbar'
import './App.css'

import Work from '../src/components/Work/Work'


function App() {
  return (
    <div>

          {/* <Navbar /> */}
          <Intro />
          <About />
          
      
          <Work />

          <Contact />
                     
    </div>
  );
}

export default App;
