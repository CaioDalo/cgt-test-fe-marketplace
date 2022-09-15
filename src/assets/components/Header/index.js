
import Aside from '../Aside';

import { useCart } from '../../../Hooks/handleCart';

import {handleAside} from '../../../Utils/utils'

import {CgSearch} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdShoppingCart} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'

import './index.scss'

export default function Header() {

    const {products} = useCart()

    let itemsInCart = 0
    products.map(product => {
        itemsInCart += product.quantity
        return itemsInCart
    })

    return(
        <>
            <header id='header' className='header'>
                <div className='header-desktop'>
                    <a href="/"><h1 className="logo">90's SHOP</h1></a>
                    <nav>
                        <ul>
                            <li className='search'>
                                <input type='text' placeholder='Search..'/>
                                <CgSearch/>
                            </li>
                            <li>
                                <a href='/products'>Products</a>
                            </li>
                            <li>
                                <a href="/about-us">About us</a>
                            </li>
                            <li>
                                <a className='cart' href="/cart">
                                    <MdShoppingCart/>
                                    <p>{itemsInCart}</p>
                                </a>
                            </li>
                            <li >
                                <button className='user-icon' data-testid='user-icon' onClick={handleAside}><FaUser/></button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='header-hamburger'>
                    <div className='hamburger-container'>
                        <a href="/"><h1 className="logo">90's SHOP</h1></a>
                        <div className='hamburger-cart-container'>
                            <a className='cart' href="/cart">
                                <MdShoppingCart/>
                                <p>{itemsInCart}</p>
                            </a>
                            <div className='spacer'></div>
                            <button className='hamburger' onClick={handleAside}><GiHamburgerMenu/></button>
                        </div>
                    </div>
                </div>
            </header>
            <Aside/>
        </>
    )
}
