import { useCart } from '../../Hooks/handleCart';

import './index.scss'

export default function Cart() {

    const {products, removeProduct, updateProduct} = useCart()
    
    const isEmpty = products.length

    let subTotalCart = 0
    products.map(product => {
        return subTotalCart += (product.value * product.quantity)
    })

    const removeProductCart = (e) => {
        removeProduct(
            e.target.id
        )
    }

    const updateQuantity = (e, newQuantity) => {
        const product = {
            id: new Date(),
            name: e.target.name,
            value: Number(e.target.value),
            quantity: Number(newQuantity),
        }

        updateProduct(product)
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
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(({id, name, value, quantity}) => (
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
                                                    <div className='quantity-container'>
                                                        <button className='button-blue' name={name} value={value} onClick={e => updateQuantity(e, quantity - 1)}>-</button>
                                                        <input type='text' className='quantity' value={quantity} disabled/>
                                                        <button className='button-blue' name={name} value={value} onClick={e => updateQuantity(e, quantity + 1)}>+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    {new Intl.NumberFormat('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }).format(value * quantity)}
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
                                                    }).format(subTotalCart)}</p>
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
                                                    }).format(subTotalCart)}</p>
                                    <br />
                                    <a href='/checkout' className='button-blue'>Proceed to checkout</a>
                                </div>
                            </div>
                        </div>
                        : 
                        <h2 className='cart-empty'>Your cart is empty :(</h2>
                    }
                </div>
            </>
        )    
    )
}