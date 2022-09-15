
import { useState } from 'react'
import { useUser } from '../../../Hooks/handleUser';

import {validateUsername, validateEmail, validatePassword} from '../../../Utils/validations'
import {handleAside} from '../../../Utils/utils'

import {CgSearch} from 'react-icons/cg'
import {FaUser} from 'react-icons/fa'

import './index.scss'

export default function Aside() {
    
    const {signUp, signIn, logout, isLogged, usernameStoraged} = useUser()

    const [value, setValue] = useState('signIn-container');

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const [messageUsername, setMessageUsername] = useState('')
    const [messageEmail, setMessageEmail] = useState('')
    const [messagePassword, setMessagePassword] = useState('')
    const [isCheckedMessage, setMessageIsCheckedMessage] = useState('')

    const [signUpMessage, setSignUpMessage] = useState('')
    const [signUpMessageStyle, setSignUpMessageStyle] = useState({})

    const [signInMessage, setSignInMessage] = useState('')
    const [isRemember, setIsRemember] = useState(false)

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const handleRemember = () => {
        setIsRemember(!isRemember);
    }

    const validateFields = async (e, form_type) => {
        e.preventDefault()

        let isUsernameValid
        if(form_type === 'signUp') {
            const isUsername = validateUsername(username)
            isUsernameValid = isUsername.status
            setMessageUsername(isUsername.message)
        }

        const isEmail = validateEmail(email)
        const isEmailValid = isEmail.status
        setMessageEmail(isEmail.message)

        const isPassword = validatePassword(password)
        const isPasswordValid = isPassword.status
        setMessagePassword(isPassword.message)

        isChecked === false ? setMessageIsCheckedMessage('You must accept the terms') 
        : setMessageIsCheckedMessage('')

        if(form_type === 'signUp') {
            if(isUsernameValid === true && isEmailValid === true && isPasswordValid === true && isChecked === true) {
                const user = {
                    username: username,
                    email: email,
                    password: password,
                }
                handleSignInSignUp(user,form_type)
            }
        } else {
            if(isEmailValid === true && isPasswordValid === true) {
                const user = {
                    email: email,
                    password: password,
                    isChecked: isChecked
                }
                handleSignInSignUp(user,form_type)
            }
        }
    }

    const handleSignInSignUp = async (user, form_type) => {
        if(form_type === 'signUp') {
            const response = await signUp(user)

            if(response === true) {
                setUsername('')
                setEmail('')
                setPassword('')
                setIsChecked(false)
                setSignUpMessage('Account Created!')
                setSignUpMessageStyle({
                    color: '#04d108',
                    fontSize: '16px',
                    textAlign: 'center',
                })
                setTimeout(() => {setSignUpMessage('')}, 3000);
            } else {
                setSignUpMessage('Sorry, something went wrong. Please, try again.')
                setSignUpMessageStyle({
                    color: 'red',
                    fontSize: '16px',
                    textAlign: 'center',
                })
            }
        } else {
            const response = await signIn(user)

            if(response === true) {
                setEmail('')
                setPassword('')
                setSignInMessage('')
            } else {
                setSignInMessage('Sorry, user do not found.')
            }
        }
    } 

    const signOut = (e) => {
        logout(e.target.value)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
        
        const tabs = document.querySelectorAll('.tab')
        tabs.forEach(tab => {
            tab.style.display = 'none'
        })
        document.querySelector(`.${event.target.value}`).style.display = 'block'
    }

    const showFormsMobile = () => {
        const formsSignIn = document.querySelector('.form-signIn-singUp')
        formsSignIn.classList.toggle('d-block')
    }

    return (
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
                    <button className='user-icon' onClick={showFormsMobile}><FaUser/></button>
                </li>
            </ul>
            <div className='form-signIn-singUp' data-testid='form-signIn-singUp'>
                {isLogged === true ?
                    <div className='access-container logged-container tab'>
                        <h1>Hello, {usernameStoraged}</h1>
                        <button className='button-blue btn-signout' value={usernameStoraged} onClick={signOut}>Sign Out</button>
                    </div>
                    :
                    <div className='access-container'>
                        <div>
                            <input type='radio' id='signIn-container' value='signIn-container' name='signIn-signUp' checked={value === 'signIn-container'} onChange={handleChange}/>
                            <label htmlFor='signIn-container'>Login</label>

                            <input type='radio' id='signUp-container' value='signUp-container' name='signIn-signUp' checked={value === 'signUp-container'} onChange={handleChange}/>
                            <label htmlFor='signUp-container'>Sign Up</label>
                        </div>

                        <form className='signIn-container tab' onSubmit={e => validateFields(e, 'signIn')}>
                            <div className='credencials'>
                                <input type='text' className='login' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                <p className='error'>{messageEmail}</p>
                                <input type='password' className='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                <p className='error'>{messagePassword}</p>
                            </div>
                            <div className='remember-forgot-container'>
                                <div className='remember-me-container'>
                                    <input type='checkbox' className='remember-me' id='remember-me' checked={isRemember} onChange={handleRemember}/>
                                    <label htmlFor='remember-me'>Remember me</label>
                                </div>
                                <a href='/forgot-password'>Forgot password?</a>
                            </div>
                            <p className='error'>{signInMessage}</p>
                            <button type='submit' className='button-blue'>Sing In</button>
                        </form>

                        <form className='signUp-container tab' onSubmit={e => validateFields(e, 'signUp')}>
                            <div className='credencials'>
                                <input type='text' className='username' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                                <p className='error'>{messageUsername}</p>
                                <input type='text' className='login' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                                <p className='error'>{messageEmail}</p>
                                <input type='password' className='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                                <p className='error'>{messagePassword}</p>
                            </div>

                            <div className='remember-forgot-container'>
                                <div className='remember-me-container'>
                                    <input type='checkbox' className='remember-me' id='terms-of-use' checked={isChecked} onChange={handleCheckbox}/>
                                    <label htmlFor='terms-of-use'>I have read and accept the <a href='/terms-of-use'>Terms of Use</a></label>
                                </div>
                            </div>
                            <p className='error'>{isCheckedMessage}</p>
                            <p className='success' style={signUpMessageStyle}>{signUpMessage}</p>
                            <button type='submit' className='button-blue'>Sign Up</button>
                        </form>
                    </div>
                }
            </div>
        </aside>
    )
}