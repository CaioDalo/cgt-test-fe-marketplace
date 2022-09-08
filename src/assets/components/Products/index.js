import pictureA from '../../imgs/products/a.jpg';
import pictureB from '../../imgs/products/b.jpg'

export default function Products() {
    return(
        <>
            {
                window.location.pathname === '/products/b' && (
                    <div>
                        <h1>Product B</h1>
                        <p>Price: 30 USD</p>

                        <button onClick={() => console.warn('Not implemented!')}>
                        Add to cart
                        </button>

                        <div><img src={pictureB} width={640} alt='Product B'/></div>
                    </div>
                )
            }
            {
                window.location.pathname === '/products/a' && (
                    <div>
                        <h1>Product A</h1>
                        <p>Price: 10 USD</p>

                        <button onClick={() => console.warn('Not implemented!')}>
                        Add to cart
                        </button>

                        <div><img src={pictureA} width={640} alt='Product A'/></div>
                    </div>
                )
            }
        </>
    )
}