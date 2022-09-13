
import { useState, useEffect } from 'react';

import pictureA from '../../assets/imgs/products/a.jpg';
import pictureB from '../../assets/imgs/products/b.jpg'
import pictureC from '../../assets/imgs/products/c.jpg'

import { useCart } from '../../Hooks/handleCart';

import './index.scss'

export default function Products() {

    const {products, addProduct, updateProduct} = useCart()

    const [quantity, setQuantity] = useState(1)
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        const productPage = `Product ${window.location.href.replace('http://localhost:3000/products/', '').toUpperCase()}`
        products.map(product => {
            const name = product.name
            if(name.includes(productPage)) {
                setIsInCart(true)
            }
        })

        if(products.length == 0) {
            setIsInCart(false)
        }
    }, [products])

    const addToCart = (e) => {
        const product = {
            id: new Date(),
            name: e.target.name,
            value: Number(e.target.value),
            quantity: Number(e.target.getAttribute('quantity')),
        }

        addProduct(product)
    }

    const updateQuantity = (e) => {
        const product = {
            id: new Date(),
            name: e.target.name,
            value: Number(e.target.value),
            quantity: Number(e.target.getAttribute('quantity')),
        }

        updateProduct(product)
    }

    const handleQuantity = (e) => {
        let newQuantity

        if(e.target.value === 'minus' && quantity !== 0 ) {
            newQuantity = quantity - 1
            setQuantity(newQuantity)

        } else if (e.target.value === 'plus' && quantity >= 0) {
            newQuantity = quantity + 1
            setQuantity(newQuantity)
        }
    }

    return(
        <> 
            {
                window.location.pathname === '/products' && (
                    <div className='product-cart-container'>
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
                    </div>
                )
            }
            {
                window.location.pathname === '/products/c' && (
                    <div className='product-cart-container' id='product-container'>
                        <div className='product' value='Product C'>
                            <img src={pictureC} alt='Product C'/>
                            
                            <div className='product-infos'>
                                <h1 className='product-name'>Product C</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='20.00' quantity='1'>$20.00</span></p>
                                
                                <div className='quantity-container'>
                                    <button className='button-blue' value='minus' onClick={handleQuantity}>-</button>
                                    <input type='text' className='quantity' value={quantity} disabled/>
                                    <button className='button-blue' value='plus' onClick={handleQuantity}>+</button>
                                </div>

                                {isInCart === false ? 
                                    <button className='button-blue' name='Product C' value="20.00" quantity={quantity}
                                            onClick={addToCart}>
                                            Add to cart 
                                    </button>
                                : 
                                    <button className='button-blue' name='Product C' value="20.00" quantity={quantity}
                                            onClick={updateQuantity}>
                                            Update quantity 
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/b' && (
                    <div className='product-cart-container' id='product-container'>
                        <div className='product' value='Product B'>
                            <img src={pictureB} alt='Product B'/>

                            <div className='product-infos'>
                                <h1 className='product-name'>Product B</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='30.00' quantity='1'>$30.00</span></p>

                                <div className='quantity-container'>
                                    <button className='button-blue' value='minus' onClick={handleQuantity}>-</button>
                                    <input type='text' className='quantity' value={quantity} disabled/>
                                    <button className='button-blue' value='plus' onClick={handleQuantity}>+</button>
                                </div>

                                {isInCart === false ? 
                                    <button className='button-blue' name='Product B' value="30.00" quantity={quantity}
                                            onClick={addToCart}>
                                            Add to cart 
                                    </button>
                                : 
                                    <button className='button-blue' name='Product B' value="30.00" quantity={quantity}
                                            onClick={updateQuantity}>
                                            Update quantity 
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/a' && (
                    <div className='product-cart-container' id='product-container'>
                        <div className='product' value='Product A'>
                            <img src={pictureA} alt='Product A'/>

                            <div className='product-infos'>
                                <h1 className='product-name'>Product A</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='10.00' quantity='1'>$10.00</span></p>

                                <div className='quantity-container'>
                                    <button className='button-blue' value='minus' onClick={handleQuantity}>-</button>
                                    <input type='text' className='quantity' value={quantity} disabled/>
                                    <button className='button-blue' value='plus' onClick={handleQuantity}>+</button>
                                </div>
                                
                                {isInCart === false ? 
                                    <button className='button-blue' name='Product A' value="10.00" quantity={quantity}
                                            onClick={addToCart}>
                                            Add to cart 
                                    </button>
                                : 
                                    <button className='button-blue' name='Product A' value="10.00" quantity={quantity}
                                            onClick={updateQuantity}>
                                            Update quantity 
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}