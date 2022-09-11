import './index.scss'

export default function Footer() {
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
                                        <input type='email' placeholder='Email' />
                                        <br/>
                                        <button type='submit' className='button-yellow'>Submit</button>
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
