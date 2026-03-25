import React from 'react'
import { data } from '../restApi.json'
import { useDispatch } from 'react-redux'
// import { addtoCart } from '../app/CartSlice'
import { addToCart } from '../app/CartSlice'

const Menu = () => {
  const dispatch = useDispatch()

  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>Our popular dishes bring everyone to the table. From classic favorites to bold new flavors, each plate is crafted to satisfy your cravings and leave you wanting more. Taste what everyone loves!</p>
          </div>
          <div className="dishes_container">
            {
              data[0].dishes.map(element => (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <b>Ratings: {element.rating}</b> <b>
                    <i className='fas fa-star' style={{ color: 'gold' }}></i>
                    <i className='fas fa-star' style={{ color: 'gold' }}></i>
                    <i className='fas fa-star' style={{ color: 'gold' }}></i>
                    <i className='fas fa-star-half-alt' style={{ color: 'gold' }}></i>
                    <i className='fas fa-star-half-alt' style={{ color: 'gold' }}></i>
                  </b>
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
    </>
  )
}

export default Menu
