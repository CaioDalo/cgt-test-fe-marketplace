import './index.scss'

export default function Footer() {
    return(
        <header>
            <div className='header-container'>
                <a href="/"><h1>90's shop</h1></a>
                <nav>
                    <ul>
                        <li>
                            <a href="/about-us">About us</a>
                        </li>
                        <li className='menu-separator'>|</li>
                        <li>
                            <a href="/cart">Cart ({/* {cartItems().length} */})</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
