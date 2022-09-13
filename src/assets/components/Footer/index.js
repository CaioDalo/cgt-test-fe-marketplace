import { useState } from 'react'

import {validateEmail} from '../../../Utils/validations'

import './index.scss'

export default function Footer() {

    const [email, setEmail] = useState('')
    const [messageEmail, setMessageEmail] = useState('')

    const validateEmailNewsletter = async (e) => {
        e.preventDefault()

        const isEmail = await validateEmail(email)
        const isEmailValid = isEmail.status
        setMessageEmail(isEmail.message)

        if(isEmailValid === true) {
            window.alert('Email registered successfully!')
            setEmail('')
        }
    }
    
    return(
        <footer>
            <div className='footer-container'>
                <nav>
                    <ul>
                        <li>
                            <h4>Categories</h4>
                            <ul className='flex-column'>
                                <li>
                                    <a href='/categories?category=1'>Category 1</a>
                                </li>
                                <li>
                                    <a href='/categories?category=2'>Category 2</a>
                                </li>
                                <li>
                                    <a href='/categories?category=3'>Category 3</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>Help</h4>
                            <ul className='flex-column'>
                                <li>
                                    <a href='track-order'>Track Order</a>
                                </li>
                                <li>
                                    <a href='returns'>Returns</a>
                                    
                                </li>
                                <li>
                                    <a href='shipping'>Shipping</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>Company</h4>
                            <ul className='flex-column'>
                                <li>
                                    <a href='/about-us'>About us</a>
                                </li>
                                <li>
                                    <a href='/privacy-policy'>Privacy Policy</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h4>Newsletter</h4>
                            <ul className='flex-column'>
                                <li>
                                    <form>
                                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                                        <p className='error'>{messageEmail}</p>
                                        <button type='submit' className='button-yellow' onClick={validateEmailNewsletter}>Submit</button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
