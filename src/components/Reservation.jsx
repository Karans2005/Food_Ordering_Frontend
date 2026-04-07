import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from "./Navbar";
// import { Link as RouterLink } from "react-router-dom";//routerlink for

import { useState } from "react";


const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);


  const handleReservation = async (e) => {
    e.preventDefault();
    
     try{
      const res = await fetch('https://food-ordering-3fbd.onrender.com/data',
        {
          method:"POST",
          headers:{ "Content-Type": "application/json"},
          body: JSON.stringify({firstName,lastName,email,phone, time,date})
        }
      )
      const data = await res.json()
      alert(data.msg);

    }catch (err) {
            console.error("Error submitting form:", err);
            alert("Failed to submit form");
        }

  };

  return (
    <section className="reservation" id="reservation">
      
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
                {/* <span></span> <RouterLink className="adminBtn"   to="/admin" >Admin</RouterLink>               */}
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Reservation;
