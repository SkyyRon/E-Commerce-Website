import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import Carousel from "./Carousel";
import CarouselS from './Carousels';

import banner2 from ".././assets/Brown and Beige Minimalist Fashion Banner (1).png";

function Home() {
    return ( 
        <div>
            <NavBar>
                <center>
                <div className="p-5">
                <Carousel></Carousel>
                </div>
                </center>
               

                <img src={banner2} className="py-5"></img>
                <ProductList>
                
                </ProductList>
                <div className="p-5">
                <CarouselS></CarouselS>
                </div>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;