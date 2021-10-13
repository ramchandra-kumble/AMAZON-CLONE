import React from "react";
import ReactCarousel from './ReactCarousel'
import '../styles/Home.css'
import Banner from './Banner'
import Product from "./Product";
const Home = () => {
    return(
        <>
           <ReactCarousel/>
           <div className="home_row">
            <Product 
            id='1'
            title='IPhone 11 Pro'
            price={99}
            ratings={4}
            imgSrc={'https://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png'}
            />
            <Product 
            id='2'
            title='Macbook M1 Pro'
            price={99999}
            ratings={5}
            imgSrc={'https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-32.png'}
            />
            <Product 
            id='3'
            title='Macbook M1 '
            price={999}
            ratings={4}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SL1500_.jpg'}
            />
           </div>
           <div className="home_row">
            <Product 
            id='4'
            title='Mask with Carbon Filters'
            price={69}
            ratings={4}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/61MlZ6noagL._SX522_.jpg'}
            />
            <Product 
            id='5'
            title='Mi Smart Band 5'
            price={75}
            ratings={5}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg'}
            />
            <Product 
            id='6'
            title='Aurion Skipping-Rope'
            price={125}
            ratings={3}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/61DteV3hXqL._SL1000_.jpg'}
            />
           </div>
           <div className="home_row">
            <Product 
            id='7'
            title='Amazon Brand T-Shirt'
            price={99}
            ratings={4}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/81dUpbuPoBL._UL1500_.jpg'}
            />
            <Product 
            id='8'
            title='Heelium Mens T-Shirt'
            price={99}
            ratings={5}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/81N-TCdaXzL._UL1500_.jpg'}
            />
            <Product 
            id='9'
            title='Mens T-shirt'
            price={99}
            ratings={3}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/71-cOmric6L._UL1500_.jpg'}
            />
           </div>
           <div className="home_row">
            <Product 
            id='10'
            title='Mask with Carbon Filters'
            price={69}
            ratings={4}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/61MlZ6noagL._SX522_.jpg'}
            />
            <Product 
            id='11'
            title='Aurion Skipping-Rope'
            price={125}
            ratings={3}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/61DteV3hXqL._SL1000_.jpg'}
            />
             <Product 
            id='12'
            title='Mi Smart Band 5'
            price={75}
            ratings={5}
            imgSrc={'https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg'}
            />
           </div>
        </>
    );
}

export default Home;