import './index.scss'

export default function Home() {
    return(
        window.location.pathname === '/' && (
            <div className="container">
                <p className="welcome">Welcome to our shop!</p>
                <p>You are probably interested in <a href="/products/a">A</a>.</p>
                <p>Check out the newest product <a href="/products/b">B</a>!</p>
            </div>
        )
    )
}

