import Header from './assets/components/Header/index'
import Footer from './assets/components/Footer/index'
import Home from './Pages/Home/index'
import Products from './Pages/Products/index'
import Cart from './Pages/Cart/index'

import './assets/styles/global.scss'

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
