
import pictureA from '../../assets/imgs/products/a.jpg';
import pictureB from '../../assets/imgs/products/b.jpg'
import pictureC from '../../assets/imgs/products/c.jpg'

import { useCart } from '../../Hooks/handleCart';

import './index.scss'

export default function Products() {

    const {addProduct} = useCart()

    const addToCart = (e) => {
        e.preventDefault()

        const product = {
            id: new Date(),
            name: e.target.name,
            value: Number(e.target.value)
        }

        addProduct(
            product
        )
    }

    return(
        <>  {
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
                        <div className='product'>
                            <img src={pictureC} alt='Product C'/>
                            
                            <div className='product-infos'>
                                <h1 className='product-name' value='Product C'>Product C</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='20.00'>$20.00</span></p>
                                
                                <button name='Product C' value="20.00"
                                        onClick={addToCart} >
                                        Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/b' && (
                    <div className='product-cart-container' id='product-container'>
                        <div className='product'>
                            <img src={pictureB} alt='Product B'/>

                            <div className='product-infos'>
                                <h1 className='product-name'>Product B</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='30.00'>$30.00</span></p>
                                
                                <button name='Product B' value="30.00"
                                        onClick={addToCart}>
                                        Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/a' && (
                    <div className='product-cart-container' id='product-container'>
                        <div className='product'>
                            <img src={pictureA} alt='Product A'/>

                            <div className='product-infos'>
                                <h1 className='product-name'>Product A</h1>
                                <p className='description'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.
                                </p>
                                <p className='price'>Price: <span className='value' value='10.00'>$10.00</span></p>
                                
                                <button name='Product A' value="10.00"
                                        onClick={addToCart}>
                                        Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}