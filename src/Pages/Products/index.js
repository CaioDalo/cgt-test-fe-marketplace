import React, { useState, useContext } from 'react';

import pictureA from '../../assets/imgs/products/a.jpg';
import pictureB from '../../assets/imgs/products/b.jpg'
import pictureC from '../../assets/imgs/products/c.jpg'

import { AuthContext } from '../../Utils/handleCart';

import './index.scss'

export default function Products() {

    const {products} = React.useContext(AuthContext)
    console.log(products)

    /* const {name, setName} = useState('')
    const {value, setValue} = useState(0)

    async function addCartItems(e) {
        e.preventDefault()

        CartItems({
            name,
            value
        })
    } */
    

    const setHeader = () => {
        const footer = document.querySelector('header')
        footer.style.position = 'relative'
    }

    return(
        <>
            {
                window.location.pathname === '/products/c' && (
                    <div className='product-container' onLoad={setHeader}>
                        <form className='product' /* onSubmit={addCartItems} */>
                            <img src={pictureC} alt='Product C'/>
                            
                            <div className='product-infos'>
                                <h1 className='product-name' value='Product C' /* onSubmit={e => setName('Product C')}> */>Product C</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='20.00' /* onSubmit={e => setValue(Number(e.target.value))} */>$20.00</span></p>
                                
                                <button type='submit'>Add to cart</button>
                            </div>
                        </form>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/b' && (
                    <div className='product-container' onLoad={setHeader}>
                        <div className='product'>
                            <img src={pictureB} alt='Product B'/>

                            <div className='product-infos'>
                                <h1 className='product-name'>Product B</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='30.00'>$30.00</span></p>
                                
                                <button onClick={() => console.warn('Not implemented!')}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/a' && (
                    <div className='product-container' onLoad={setHeader}>
                        <div className='product'>
                            <img src={pictureA} alt='Product A'/>

                            <div className='product-infos'>
                                <h1 className='product-name'>Product A</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='10.00'>$10.00</span></p>
                                
                                <button onClick={() => console.warn('Not implemented!')}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}