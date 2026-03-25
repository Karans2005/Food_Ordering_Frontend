import React from 'react'
// import { data } from '../../restApi.json'
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux'
// import { removeFromCart } from '../../app/CartSlice';
import { removeFromCart } from '../../app/CartSlice';
import { addToCart } from '../../app/CartSlice';

function Order() {
    const cartitem = useSelector(state => state.cart.cart);
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>CART ITEM</h1>
                {
                    cartitem.map(item => {
                        return (
                            <div style={{ display: 'flex', padding: '20px', margin: '10px', gap: '10px', border: '2px solid grey' }}>
                                <img src={item.image} alt="FOOD" style={{ width: '100px' }} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <button onClick={() => dispatch(removeFromCart({ id: item.id }))} style={{ backgroundColor: 'red', color: 'white' }}>REMOVE TO CART</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* <section className='menu' id='menu'>
                <div className="container">
                    <div className="heading_section">
                        <h1 className="heading">Food Items</h1>
                        <p>Your Favirout Order Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
                    </div>
                    <div className="dishes_container">
                        {
                            data[0].dishes.map(element => (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <p><b>Price:</b> ₹{element.price}</p>
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                addToCart({
                                                    id: element.id,
                                                    title: element.title,
                                                    image: element.image,
                                                    price: element.price, // assuming price exists
                                                })
                                            )
                                        }
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className='order'>
                <Link to={"/"}>
                    Back to Home
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
            </div> */}
        </>
    )
}


export default Order 