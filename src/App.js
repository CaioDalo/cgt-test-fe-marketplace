import Header from './assets/components/Header/index'
import Home from './assets/components/Home/index'
import Products from './assets/components/Products/index'
import Cart from './assets/components/Cart/index'
import Footer from './assets/components/Footer/index'


import './assets/styles/global.scss'

function cartItems() {
  return []
}

function App() {
  return (
    <main>
      < Header/>
      < Home/>
      < Products/>
      < Cart/>
      < Footer/>
    </main>
  );
}

export default App;
