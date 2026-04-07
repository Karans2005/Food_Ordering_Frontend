import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Admin() {
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    time: '',
    date: ''
  });

  useEffect(() => {
    fetch('https://food-ordering-3fbd.onrender.com/listData')
      .then(res => res.json())
      .then(val => {
        if (val.findData) {
          setData(val.findData);
        }
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://food-ordering-3fbd.onrender.com/deleteData/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      alert(result.msg);
      setData(prevData => prevData.filter(item => item._id !== id));
    } catch (err) {
      console.error("Failed to delete", err);
      alert("Error deleting data");
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      time: user.time,
      date: user.date
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://food-ordering-3fbd.onrender.com/updateData/${editingUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (result.status === 1) {
        alert(result.msg);
        setData(prevData => prevData.map(item => item._id === editingUser._id ? result.updatedUser : item));
        setEditingUser(null);
      } else {
        alert('Update failed: ' + result.msg);
      }
    } catch (err) {
      console.error('Update error:', err);
      alert('Error updating data');
    }
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div className='admin-big-container1'>
      <h1>Admin Dashboard</h1>

      <div className='admin-big-container2'>
        {data.length === 0 ? (
          <p>Loading or no data found.</p>
        ) : (
          data.map((singleData, index) => (
            <fieldset key={singleData._id} className='admin-container'>
            <legend>User {index + 1}</legend>
              <span><b>First Name:</b> {singleData.firstName}</span><br />
              <span><b>Last Name:</b> {singleData.lastName}</span><br />
              <span><b>Email:</b> {singleData.email}</span><br />
              <span><b>Phone No:</b> {singleData.phone}</span><br />
              <span><b>Time:</b> {singleData.time}</span><br />
              <span><b>Date:</b> {singleData.date}</span><br />
              <div>
                <button className='updateBtn' onClick={() => handleEditClick(singleData)}>Update</button>
                <button className='deleteBtn' onClick={() => handleDelete(singleData._id)}>Delete</button>
              </div>
            </fieldset>
          ))
        )}
      </div>

      {editingUser && (
        <div
          className='update-form-container'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px',
            flexWrap: 'wrap'

          }}
        >
          <div>
            <h2 style={{ bottom: '10px', backgroundColor: 'green', marginBottom: '30px', color: 'white' }} >Update User</h2>
            <form onSubmit={handleUpdateSubmit} className='update-form'>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                <button type="submit" className='updateBtn'>Save</button>
                <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}


      <Link to={"/"}>
        Back to Home <HiOutlineArrowNarrowRight />
      </Link>
    </div>
  );
}

export default Admin;
