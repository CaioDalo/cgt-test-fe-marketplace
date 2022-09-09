
export default function Cart() {
    return(
        window.location.pathname === '/cart' && (
            <div>
                <p>Are you ready to purchase these?</p>
    
                <ul>
                    {/* {cartItems().map((cartItem) => <li key={cartItem}>{cartItem}</li>)} */}
                </ul>
            </div>
        )
    )
}