

export default function AboutUs() {
    return (
        window.location.pathname === '/about-us' && (
            <div>
                <h1>Product B</h1>
                <p>Price: 30 USD</p>

                <button onClick={() => console.warn('Not implemented!')}>
                Add to cart
                </button>

                <div><img src={pictureB} width={640} alt='Product B'/></div>
            </div>
        )
    )
}