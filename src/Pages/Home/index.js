import { useState } from 'react'
import banner from '../../assets/imgs/depositphotos_98618818-stock-illustration-weekly-flash-sale-banner-template.jpg'

import './index.scss'

export default function Home() {

    const [overview, setOverview] = useState('all');

    const handleOverview = (event) => {
        setOverview(event.target.value);
    };

    return(
        window.location.pathname === '/' && (
            <>
                <section className='top-home'>
                    <img src={banner} alt='banner' className='banner'/>
                </section>
                <section className="main-home">
                    <div className='category-overview'>
                        <h2>Category Overview</h2>
                        <div className='list-category'>
                            <ul className='list'>
                                <a href='/categories?category=1'>
                                    <li className='card cat1'>
                                        <h3>Category 1</h3>
                                        <p>See all products</p>
                                    </li>
                                </a>
                                <a href='/categories?category=2'>
                                    <li className='card cat2'>
                                        <h3>Category 2</h3>
                                        <p>See all products</p>
                                    </li>
                                </a>
                                <a href='/categories?category=3'>
                                    <li className='card cat3'>
                                        <h3>Category 3</h3>
                                        <p>See all products</p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className='product-overview-container'>
                        <div className='product-overview'>
                            <h2>Product Overview</h2>

                            <ul className='list-overview'>
                                <li>
                                    <input type='radio' id='all' value='all' name='overview' checked={overview === 'all'} onChange={handleOverview}/>
                                    <label htmlFor='all'>All products</label>
                                </li>

                                <li>
                                    <input type='radio' id='discount' value='discount' name='overview' checked={overview === 'discount'} onChange={handleOverview}/>
                                    <label htmlFor='discount'>Discount</label>
                                </li>

                                <li>
                                    <input type='radio' id='aircraft' value='aircraft' name='overview' checked={overview === 'aircraft'} onChange={handleOverview}/>
                                    <label htmlFor='aircraft'>Aircraft</label>
                                </li>
                                <li>
                                    <input type='radio' id='cars' value='cars' name='overview' checked={overview === 'cars'} onChange={handleOverview}/>
                                    <label htmlFor='cars'>Cars</label>
                                </li>
                                <li>
                                    <input type='radio' id='animals' value='animals' name='overview' checked={overview === 'animals'} onChange={handleOverview}/>
                                    <label htmlFor='animals'>Animals</label>
                                </li>
                            </ul>

                            <ul className='list'>
                                <a href="/products/a">
                                    <li className='card cat1'>
                                        <h3>You are probably <br /> interested in A</h3>
                                        <p>See this product</p>
                                    </li>
                                </a>

                                <a href="/products/b">
                                    <li className='card cat2'>
                                        <h3>Check out the <br /> newest product  B</h3>
                                        <p>See this product</p>
                                    </li>
                                </a>

                                <a href="/products/c">
                                    <li className='card cat3'>
                                        <h3>What about the <br /> product C ?</h3>
                                        <p>See this product</p>
                                    </li>
                                </a>
                            </ul>

                            <a className='see-more button-blue'>See more!</a>
                        </div>
                    </div>
                </section>
            </>
        )
    )
}

