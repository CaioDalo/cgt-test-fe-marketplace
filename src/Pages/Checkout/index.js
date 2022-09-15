import './index.scss'

import { useUser } from '../../Hooks/handleUser';

export default function Checkout() {
    const {isLogged} = useUser()

    return (
        window.location.pathname === '/checkout' && (
            <div>
                    {isLogged === true ?
                    <h2>Checkout</h2>
                    :
                    <h2 className='cart-empty'>You must be logged to access this page</h2>
                }
            </div>
        )
    )
}