import Header from './assets/components/Header/index'
import Footer from './assets/components/Footer/index'
import Home from './Pages/Home/index'
import Products from './Pages/Products/index'
import Cart from './Pages/Cart/index'

import './assets/styles/global.scss'
import { CartProvider } from './Hooks/handleCart'

function App() {
  return (
    <>
      <CartProvider>
        < Header/>
        <main>
          < Home/>
          < Products/>
          < Cart/>
        </main>
      </CartProvider>
      < Footer/>
      </>
  );
}

export default App;
