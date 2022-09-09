
import { useState } from 'react'

import {CgSearch} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdShoppingCart} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {MdOutlineArrowDropUp} from 'react-icons/md'

import './index.scss'

export default function Header() {

    const [value, setValue] = useState('signIn-container');
    const [valueMobile, setValueMobile] = useState('signIn-container-mobile');

    const handleChange = (event) => {
        if(event.target.value.includes('mobile')) {
            setValueMobile(event.target.value);

            const tabs = document.querySelectorAll('.tab-mobile')
            tabs.forEach(tab => {
                tab.style.display = 'none'
            })

            document.querySelector(`.${event.target.value}`).style.display = 'block'

        } else {
            setValue(event.target.value);
            
            const tabs = document.querySelectorAll('.tab')
            tabs.forEach(tab => {
                tab.style.display = 'none'
            })

            document.querySelector(`.${event.target.value}`).style.display = 'block'
        }
    };

    const handleAside = () => {
        const aside = document.querySelector('aside')
        aside.classList.toggle('w-100vw')
    }

    const handleSingIn = () => {
        const formsSignIn = document.querySelectorAll('.form-signIn-singUp')
        formsSignIn.forEach(form => {
            form.classList.toggle('d-block')
        })
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
                            <input type='radio' id='signIn-container' value='signIn-container' name='signIn-signUp' checked={value === 'signIn-container'} onChange={handleChange}/>
                            <label htmlFor='signIn-container'>Login</label>

                            <input type='radio' id='signUp-container' value='signUp-container' name='signIn-signUp' checked={value === 'signUp-container'} onChange={handleChange}/>
                            <label htmlFor='signUp-container'>Sign Up</label>
                        </div>

                        <form className='signIn-container tab'>
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

                        <form className='signUp-container tab'>
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
                                <input type='radio' id='signIn-container-mobile' value='signIn-container-mobile' name='signIn-signUp-mobile' checked={valueMobile === 'signIn-container-mobile'} onChange={handleChange}/>
                                <label htmlFor='signIn-container-mobile'>Login</label>

                                <input type='radio' id='signUp-container-mobile' value='signUp-container-mobile' name='signIn-signUp-mobile' checked={valueMobile === 'signUp-container-mobile'} onChange={handleChange}/>
                                <label htmlFor='signUp-container-mobile'>Sign Up</label>
                            </div>

                            <form className='signIn-container-mobile tab-mobile'>
                                <div className='credencials'>
                                    <input type='email' className='login' placeholder='Login'/>
                                    <input type='password' className='password' placeholder='Password'/>
                                </div>
                                <div className='remember-forgot-container'>
                                    <div className='remember-me-container'>
                                        <input type='checkbox' className='remember-me' id='remember-me-mobile' />
                                        <label htmlFor='remember-me-mobile'>Remember me</label>
                                    </div>
                                    <a href='/forgot-password'>Forgot password?</a>
                                </div>

                                <button type='submit'>Sing In</button>
                            </form>

                            <form className='signUp-container-mobile tab-mobile'>
                                <div className='credencials'>
                                    <input type='email' className='login' placeholder='Username'/>
                                    <input type='email' className='login' placeholder='Login'/>
                                    <input type='password' className='password' placeholder='Password'/>
                                </div>
                                <div className='remember-forgot-container'>
                                    <div className='remember-me-container'>
                                        <input type='checkbox' className='remember-me' id='terms-of-use-mobile' />
                                        <label htmlFor='terms-of-use-mobile'>have read and accept the <a href='/terms-of-use'>Terms of Use</a></label>
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
