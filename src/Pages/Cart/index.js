import { useCart } from '../../Hooks/handleCart';

import './index.scss'

export default function Cart() {

    const {products, removeProduct } = useCart()
    
    const isEmpty = products.length

    let subTotal = 0
    products.map(product => {
        return subTotal += product.value
    })

    const removeProductCart = (e) => {
        removeProduct(
            e.target.id
        )
    }

    const emptyStyle = {
        'margin': '0 auto',
        'textAlign': 'center'
    }
    
    return(
        window.location.pathname === '/cart' && (
            <>
                <div className='product-cart-container'  id='cart'>
                    {isEmpty > 0 ?
                        <div className='tables-container'>
                            <h2>Are you ready to purchase these?</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Remove</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(({id, name, value}) => (
                                            <tr key={id}>
                                                <td><button id={id} className='remove' onClick={removeProductCart}>X</button></td>
                                                <td>{name}</td>
                                                <td>
                                                    {new Intl.NumberFormat('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD',
                                                        currencyDisplay: 'narrowSymbol'
                                                    }).format(value)}
                                                </td>
                                                <td>
                                                    {new Intl.NumberFormat('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }).format(value)}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className='totals'>
                                <h2>CART TOTALS</h2>
                                <div>
                                    <p>Subtotal: {new Intl.NumberFormat('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }).format(subTotal)}</p>
                                </div>
                                <hr />
                                <div className='coupon'>
                                    <input type='text' placeholder='Coupon code' />
                                    <br />
                                    <button className='button-blue'>Apply</button>
                                </div>
                                <hr />
                                <div>
                                    <p>Total: {new Intl.NumberFormat('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }).format(subTotal)}</p>
                                    <button className='button-blue'>Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                        : 
                        <h2 style={emptyStyle}>Your cart is empty :(</h2>
                    }
                </div>
            </>
        )    
    )
}