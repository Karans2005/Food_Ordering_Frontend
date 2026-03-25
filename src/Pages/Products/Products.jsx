import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../app/CartSlice';
import data from '../../searchProduct.json'; // adjust import if needed
import { Link as RouterLink } from "react-router-dom";//routerlink for

function Products() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const cartItem = useSelector((state) => state.cart.cart); // fallback for safety


    const foodfactory = data.foodfactory;

    const filteredFoods = foodfactory.filter(food => {
        const match = food.name?.toLowerCase().includes(searchTerm.toLowerCase());
        console.log(food.name, '-> match:', match);
        return match;
    });

    return (

        <>
        {/* FoodNavbar  */}
            <nav className='foodNavbar'>
                <div className="logo">FOODY</div>
               
                <div  >
                    <input
                    className='searchInput'
                        type="text"
                        placeholder="Search your favourite food..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    
                    />
                    </div>
                    <div className="links">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                     <RouterLink className="adminBtn" to="/" >
                        <i className="fas fa-home"></i>
                    </RouterLink>
                    
                    <RouterLink className="adminBtn" to="/admin" >
                        <i className="fas fa-user-shield"></i>
                    </RouterLink>

                    <RouterLink className="cartBtn" to={'/order'}>
                        <i className="fas fa-cart-plus">
                            <small>{cartItem.length}</small>
                        </i>
                    </RouterLink>
                </div>
            </nav>
            {/* Products */}

            <section className='products'>
                <br />
                <div className="container">

                    <div className="product_container">

                        {
                            filteredFoods.map(food => (

                                <div key={food.id} className='card' >
                                    <div>

                                        <img
                                            src={food.poster}
                                            alt="foodImg"
                                        />
                                        <h3>{food.name}</h3>
                                        <b>Ratings: {food.rating}</b> <b>
                                            <i className='fas fa-star' style={{ color: 'gold' }}></i>
                                            <i className='fas fa-star' style={{ color: 'gold' }}></i>
                                            <i className='fas fa-star' style={{ color: 'gold' }}></i>
                                            <i className='fas fa-star-half-alt' style={{ color: 'gold' }}></i>
                                            <i className='fas fa-star-half-alt' style={{ color: 'gold' }}></i>
                                        </b>
                                        <p><b>Price:</b> ₹{food.price}</p>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    addToCart({
                                                        id: food.id,
                                                        title: food.name,
                                                        image: food.poster, // corrected from image
                                                        price: food.price,
                                                    })
                                                )
                                            }
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default Products;
