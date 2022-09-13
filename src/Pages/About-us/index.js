import bannerAboutUs from '../../assets/imgs/stock-vector-set-illustration-about-d-printing-printer.jpg'
import printer3d from '../../assets/imgs/3d.jpg'

import './index.scss'

export default function AboutUs() {
    return (
        window.location.pathname === '/about-us' && (
            <div>
                <section>
                    <img src={bannerAboutUs} alt='Banner About Us' className='banner'/>
                </section>
                <section className='container'>
                    <div className='d-flex'>
                        <img src={printer3d} alt='3D Printer'/>
                        <div className='texts'>
                            <h1>Loren Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.</p>
                        </div>
                    </div>
                </section>

                <section className='grey-background'>
                    <div>
                        <h1>Loren Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.</p>
                    </div>
                </section>

                <section className='container'>
                    <div className='d-flex img-right'>
                        <img src={printer3d} alt='3D Printer'/>
                        <div className='texts'>
                            <h1>Loren Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor quam, facilisis ac tortor id, suscipit mattis nisi. Vestibulum a nisl vel lacus tincidunt aliquam. Morbi fermentum eros in augue finibus, ut faucibus mauris pellentesque.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    )
}