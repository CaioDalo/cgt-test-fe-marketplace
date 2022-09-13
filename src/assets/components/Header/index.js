
import { useState } from 'react'

import { useCart } from '../../../Hooks/handleCart';
import { useUser } from '../../../Hooks/handleUser';

import {validateUsername, validateEmail, validatePassword} from '../../../Utils/validations'

import {CgSearch} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdShoppingCart} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {MdOutlineArrowDropUp} from 'react-icons/md'

import './index.scss'

export default function Header() {

    const {products} = useCart()
    const {signUp, signIn, logout} = useUser()

    const [value, setValue] = useState('signIn-container');
    const [valueMobile, setValueMobile] = useState('signIn-container-mobile');

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const [messageUsername, setMessageUsername] = useState('')
    const [messageEmail, setMessageEmail] = useState('')
    const [messagePassword, setMessagePassword] = useState('')
    const [isCheckedMessage, setMessageIsCheckedMessage] = useState('')

    let itemsInCart = 0
    products.map(product => {
        itemsInCart += product.quantity
    })

    const handleChange = (event) => {
        if(event.target.value.includes('mobile')) {
            setValueMobile(event.target.value)

            const tabs = document.querySelectorAll('.tab-mobile')
            tabs.forEach(tab => {
                tab.style.display = 'none'
            })
            document.querySelector(`.${event.target.value}`).style.display = 'block'

        } else {
            setValue(event.target.value)
            
            const tabs = document.querySelectorAll('.tab')
            tabs.forEach(tab => {
                tab.style.display = 'none'
            })
            document.querySelector(`.${event.target.value}`).style.display = 'block'
        }
    };

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const validateSignUp = async (e) => {
        e.preventDefault()
        const isUsername = await validateUsername(username)
        const isUsernameValid = isUsername.status
        setMessageUsername(isUsername.message)

        const isEmail = await validateEmail(email)
        const isEmailValid = isEmail.status
        setMessageEmail(isEmail.message)

        const isPassword = await validatePassword(password)
        const isPasswordValid = isPassword.status
        setMessagePassword(isPassword.message)

        isChecked == false ? setMessageIsCheckedMessage('You must accept the terms') 
        : setMessageIsCheckedMessage('')

        if(isUsernameValid == true && isEmailValid == true && isPasswordValid == true && isChecked == true) {
            createUser()
        }
    }

    const createUser = async () => {
        const user = {
            username: username,
            email: email,
            password: password,
        }
        const response = await signUp(user)

        if(response) {
            setUsername('')
            setMessageEmail('')
            setPassword('')
            setIsChecked(false)
        }
    }

    const validateSignIn = async (e) => {
        const isEmail = await validateEmail(email)
        const isEmailValid = isEmail.status
        setMessageEmail(isEmail.message)

        const isPassword = await validatePassword(password)
        const isPasswordValid = isPassword.status
        setMessagePassword(isPassword.message)

        if(isEmailValid == true && isPasswordValid == true) {
            login()
        }
    }

    const login = () => {
        const user = {
            email: email,
            password: password,
        }
        signIn(user)

        setUsername('')
        setMessageEmail('')
        setPassword('')
        setIsChecked(false)
    }

    const handleAside = () => {
        const aside = document.querySelector('aside')
        aside.classList.toggle('w-100vw')
    }

    const handleSingInSignUp = () => {
        const formsSignIn = document.querySelectorAll('.form-signIn-singUp')
        formsSignIn.forEach(form => {
            form.classList.toggle('d-block')
        })
    }

    return(
        <header id='header' className='header'>
            <div className='header-container-desktop'>
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
                            <button className='user-icon' data-testid='user-icon' onClick={handleSingInSignUp}><FaUser/></button>
                        </li>
                    </ul>
                </nav>

                <div className='form-signIn-singUp' data-testid='form-signIn-singUp'>
                    <div className='access-container'>
                        <MdOutlineArrowDropUp/>
                        <div>
                            <input type='radio' id='signIn-container' value='signIn-container' name='signIn-signUp' checked={value === 'signIn-container'} onChange={handleChange}/>
                            <label htmlFor='signIn-container'>Login</label>

                            <input type='radio' id='signUp-container' value='signUp-container' name='signIn-signUp' checked={value === 'signUp-container'} onChange={handleChange}/>
                            <label htmlFor='signUp-container'>Sign Up</label>
                        </div>

                        <form className='signIn-container tab' onSubmit={validateSignIn}>
                            <div className='credencials'>
                                <input type='text' className='login' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                <p className='error'>{messageEmail}</p>
                                <input type='password' className='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                <p className='error'>{messagePassword}</p>
                            </div>
                            <div className='remember-forgot-container'>
                                <div className='remember-me-container'>
                                    <input type='checkbox' className='remember-me' id='remember-me' />
                                    <label htmlFor='remember-me'>Remember me</label>
                                </div>
                                <a href='/forgot-password'>Forgot password?</a>
                            </div>

                            <button type='submit' className='button-blue'>Sing In</button>
                        </form>

                        <form className='signUp-container tab' onSubmit={validateSignUp}>
                            <div className='credencials'>
                                <input type='text' className='username' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                                <p className='error'>{messageUsername}</p>
                                <input type='text' className='login' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                <p className='error'>{messageEmail}</p>
                                <input type='password' className='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                <p className='error'>{messagePassword}</p>
                            </div>

                            <div className='remember-forgot-container'>
                                <div className='remember-me-container'>
                                    <input type='checkbox' className='remember-me' id='terms-of-use' checked={isChecked} onChange={handleCheckbox}/>
                                    <label htmlFor='terms-of-use'>have read and accept the <a href='/terms-of-use'>Terms of Use</a></label>
                                </div>
                            </div>
                            <p className='error'>{isCheckedMessage}</p>
                            <button type='submit' className='button-blue'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='header-container-hamburger'>
                <div className='header-hamburger-container'>
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
                <aside>
                    <div className='header'>
                        <a href="/"><h1 className="logo">90's SHOP</h1></a>
                        <button className='close' onClick={handleAside}>X</button>
                    </div>
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

                        <li >
                            <button className='user-icon' onClick={handleSingInSignUp}><FaUser/></button>
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

                            <form className='signIn-container-mobile tab-mobile' onSubmit={validateSignIn}>
                                <div className='credencials'>
                                    <input type='text' className='email' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                    <p className='error'>{messageEmail}</p>
                                    <input type='password' className='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                    <p className='error'>{messagePassword}</p>
                                </div>
                                <div className='remember-forgot-container'>
                                    <div className='remember-me-container'>
                                        <input type='checkbox' className='remember-me' id='remember-me-mobile' />
                                        <label htmlFor='remember-me-mobile'>Remember me</label>
                                    </div>
                                    <a href='/forgot-password'>Forgot password?</a>
                                </div>

                                <button type='submit' className='button-blue'>Sing In</button>
                            </form>

                            <form className='signUp-container-mobile tab-mobile' onSubmit={validateSignUp}>
                                <div className='credencials'>
                                    <input type='text' className='email' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                                    <p className='error'>{messageEmail}</p>
                                    <input type='text' className='login' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                    <p className='error'>{messagePassword}</p>
                                    <input type='password' className='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                    <p className='error'>{messagePassword}</p>
                                </div>
                                <div className='remember-forgot-container'>
                                    <div className='remember-me-container'>
                                        <input type='checkbox' className='remember-me' id='terms-of-use' checked={isChecked} onChange={handleCheckbox}/>
                                        <label htmlFor='terms-of-use-mobile'>have read and accept the <a href='/terms-of-use'>Terms of Use</a></label>
                                    </div>
                                </div>
                                <p className='error'>{isCheckedMessage}</p>
                                <button type='submit' className='button-blue'>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </header>
    )
}
