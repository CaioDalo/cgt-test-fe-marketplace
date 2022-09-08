
import {CgSearch} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdShoppingCart} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {MdOutlineArrowDropUp} from 'react-icons/md'

import { useState } from 'react'

import './index.scss'

export default function Header() {

    const [value, setValue] = useState('signIn-container');

    const handleChange = (event) => {
        setValue(event.target.value);

        if(event.target.value == 'signIn-container') {
            document.querySelector('.signIn-container').style.display = 'block'
            document.querySelector('.signUp-container').style.display = 'none'
        } else {
            document.querySelector('.signIn-container').style.display = 'none'
            document.querySelector('.signUp-container').style.display = 'block'
        }
    };

    const handleAside = () => {
        const aside = document.querySelector('aside')
        aside.classList.toggle('w-100vw')
    }

    const handleSingIn = () => {
        const formSignIn = document.querySelector('.form-signIn-singUp')
        formSignIn.classList.toggle('d-block')
    }

    return(
        <header className='header'>
            <div className='header-container-desktop'>
                <a href="/"><h1 className="logo">90's shop</h1></a>
                <nav>
                    <ul>
                        <li className='search'>
                            <input type='text' placeholder='Search..'/>
                            <CgSearch/>
                        </li>

                        <li>
                            <a href="/about-us">About us</a>
                        </li>

                        <li>
                            <a className='cart' href="/cart">
                                <MdShoppingCart/>{/* {cartItems().length} */}
                                <p>3{/* {cartItems().length} */}</p>
                            </a>
                        </li>

                        <li >
                            <button className='user-icon' onClick={handleSingIn}><FaUser/></button>
                        </li>
                    </ul>
                </nav>

                <div className='form-signIn-singUp'>
                    <div className='access-container'>
                        <MdOutlineArrowDropUp/>
                        <div>
                            <input type='radio' id='signIn-container' value='signIn-container' name='teste' checked={value === 'signIn-container'} onChange={handleChange}/>
                            <label htmlFor='signIn-container'>Login</label>

                            <input type='radio' id='signUp-container' value='signUp-container' name='teste' checked={value === 'signUp-container'} onChange={handleChange}/>
                            <label htmlFor='signUp-container'>Sign Up</label>
                        </div>

                        <form className='signIn-container'>
                            <div className='credencials'>
                                <input type='email' className='login' placeholder='Login'/>
                                <input type='password' className='password' placeholder='Password'/>
                            </div>
                            <div className='remember-forgot-container'>
                                <div className='remember-me-container'>
                                    <input type='checkbox' className='remember-me' id='remember-me' />
                                    <label htmlFor='remember-me'>Remember me</label>
                                </div>
                                <a href='/forgot-password'>Forgot password?</a>
                            </div>

                            <button type='submit'>Sing In</button>
                        </form>

                        <form className='signUp-container'>
                            <div className='credencials'>
                                <input type='email' className='login' placeholder='Username'/>
                                <input type='email' className='login' placeholder='Login'/>
                                <input type='password' className='password' placeholder='Password'/>
                            </div>
                            <div className='remember-forgot-container'>
                                <div className='remember-me-container'>
                                    <input type='checkbox' className='remember-me' id='terms-of-use' />
                                    <label htmlFor='terms-of-use'>have read and accept the <a href='/terms-of-use'>Terms of Use</a></label>
                                </div>
                            </div>

                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='header-container-hamburger'>
                <div className='header-hamburger-container'>
                    <a href="/"><h1 className="logo">90's shop</h1></a>
                    <div className='hamburger-cart-container'>
                        <a className='cart' href="/cart">
                            <MdShoppingCart/>
                            <p>3{/* {cartItems().length} */}</p>
                        </a>
                        <div className='spacer'></div>
                        <button className='hamburger' onClick={handleAside}><GiHamburgerMenu/></button>
                    </div>
                </div>
                <aside>
                    <div className='header'>
                        <a href="/"><h1 className="logo">90's shop</h1></a>
                        <button className='close' onClick={handleAside}>X</button>
                    </div>
                    <ul>
                        <li className='search'>
                            <input type='text' placeholder='Search..'/>
                            <CgSearch/>
                        </li>

                        <li>
                            <a href="/about-us">About us</a>
                        </li>

                        <li >
                            <button className='user-icon' onClick={handleSingIn}><FaUser/></button>
                        </li>
                    </ul>

                    <div className='form-signIn-singUp'>
                        <div className='access-container'>
                            <MdOutlineArrowDropUp/>
                            <div>
                                <input type='radio' id='signIn-container' value='signIn-container' name='teste' checked={value === 'signIn-container'} onChange={handleChange}/>
                                <label htmlFor='signIn-container'>Login</label>

                                <input type='radio' id='signUp-container' value='signUp-container' name='teste' checked={value === 'signUp-container'} onChange={handleChange}/>
                                <label htmlFor='signUp-container'>Sign Up</label>
                            </div>

                            <form className='signIn-container'>
                                <div className='credencials'>
                                    <input type='email' className='login' placeholder='Login'/>
                                    <input type='password' className='password' placeholder='Password'/>
                                </div>
                                <div className='remember-forgot-container'>
                                    <div className='remember-me-container'>
                                        <input type='checkbox' className='remember-me' id='remember-me' />
                                        <label htmlFor='remember-me'>Remember me</label>
                                    </div>
                                    <a href='/forgot-password'>Forgot password?</a>
                                </div>

                                <button type='submit'>Sing In</button>
                            </form>

                            <form className='signUp-container'>
                                <div className='credencials'>
                                    <input type='email' className='login' placeholder='Username'/>
                                    <input type='email' className='login' placeholder='Login'/>
                                    <input type='password' className='password' placeholder='Password'/>
                                </div>
                                <div className='remember-forgot-container'>
                                    <div className='remember-me-container'>
                                        <input type='checkbox' className='remember-me' id='terms-of-use' />
                                        <label htmlFor='terms-of-use'>have read and accept the <a href='/terms-of-use'>Terms of Use</a></label>
                                    </div>
                                </div>

                                <button type='submit'>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </header>
    )
}
