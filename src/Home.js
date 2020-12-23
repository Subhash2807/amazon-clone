import React from 'react'
import './Home.css'
import Product from './Product.jsx'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31PE/Dec_SO_BO/V259540125_IN_WLME_SamsungM31Prime_DesktopTallHero_1500x600._CB413304259_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="123451"
                        title='OPPO A52 (Stream White, 6GB RAM, 128GB Storage) with No Cost EMI'
                        price={13990}
                        image="https://m.media-amazon.com/images/I/71RadpHBLhL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="123452"
                        title="Oliveware Teso Lunch Box with Bottle 3 Stainless Steel Containers, Pickle Boxes)"
                        price={885}
                        image="https://m.media-amazon.com/images/I/71mRT+nLhbL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    
                    <Product
                        id="123453"
                        title="Dell G3 3500 Gaming Laptop with 15.6 Inch 120 Hz FHD Display"
                        price={70490.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/61s0UA4pmVL._SL1000_.jpg"
                        rating={3}

                    />
                    <Product
                        id="123454"
                        title="IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine"
                        price={21690}
                        image="https://m.media-amazon.com/images/I/411oohq+7QL.jpg"
                        rating={5}
                    />
                    <Product
                        id="123455"
                        title="JaipurCrafts Brass Gramophone Showpiece, 17 CM, Gold, 1 Piece"
                        price={3300}
                        image="https://images-na.ssl-images-amazon.com/images/I/61LpIXROyoL._SL1100_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123456"
                        image="https://images-na.ssl-images-amazon.com/images/I/81NZY1dIxqL._SL1500_.jpg"
                        title="Nautica Voyage Eau de Toilette For Men, 100ml"
                        rating={4}
                        price={1921}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
