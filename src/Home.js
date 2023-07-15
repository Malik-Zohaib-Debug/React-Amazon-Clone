import React from 'react'
import Header from './Header'
import Product from './Product';
import amazonBanner from './amazon-banner.jpg';
import productImg from './product_img.jpg';
import './Home.css';

function Home() {
  return (
    <div>
        <Header />
        <div className='home'>
            <img src={amazonBanner} alt='amazon-banner' className='home__image'/>

            <div className='home__row'>
              <Product 
                  id= "1"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Business"
                  price={11.96}
                  rating={5}
                  image={productImg}
              />

              <Product 
                  id= "2"
                  title="AmazonCommercial Wireless Noise Cancelling Bluetooth Headphones "
                  price={85.00}
                  rating={4}
                  image={"https://m.media-amazon.com/images/I/61Ry9-xUMCL._AC_UL320_.jpg"}
              />
            </div>

            <div className='home__row'>
              <Product 
                  id= "3"
                  title="Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)"
                  price={384.00}
                  rating={3}
                  image={"https://m.media-amazon.com/images/I/619m8rLBQSL._AC_UY218_.jpg"}
              />

              <Product 
                  id= "4"
                  title="Cuisinart Single Serve Coffee Maker + Coffee Grinder, 48-Ounce Removable Reservoir, Black, DGB-2 "
                  price={139.00}
                  rating={5}
                  image={"https://m.media-amazon.com/images/I/51iDxel66ML._AC_UL320_.jpg"}
              />

              <Product 
                  id= "5"
                  title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 256GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Gray"
                  price={1056.08}
                  rating={3}
                  image={"https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_UL320_.jpg"}
              />    
            </div>

            <div className='home__row'>
              <Product 
                  id= "6"
                  title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black "
                  price={399}
                  rating={4}
                  image={"https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UL320_.jpg"}
              />
                
            </div>

        </div>
    </div>
  )
}

export default Home