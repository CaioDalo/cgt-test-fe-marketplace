import Header from './assets/components/Header/index'
import Footer from './assets/components/Footer/index'
import Home from './Pages/Home/index'
import Products from './Pages/Products/index'
import Cart from './Pages/Cart/index'
import AboutUs from './Pages/About-us'

import './assets/styles/global.scss'
import { CartProvider } from './Hooks/handleCart'
import { UserProvider } from './Hooks/handleUser'


function App() {
  return (
    <>
        <CartProvider>
          <UserProvider>
            < Header/>
          </UserProvider>
          <main>
            < Home/>
            < Products/>
            < Cart/>
            <AboutUs/>
          </main>
        </CartProvider>
      < Footer/>
      </>
  );
}

export default App;
