import React, { useState } from 'react'

export default function Dashboard() {
  const [data, setData] = useState([])

  // fetch('http://localhost:3500/listData').then(res => res.json).then(val => setData(val.findRes))
  fetch('https://food-ordering-3fbd.onrender.com/listData').then(res => res.json()).then(val => setData(val.findData))




  return (
    <div>
      <h1>detailed</h1>

      <div>
        {data.map((singleData) => (
          <div key={singleData.id}>
            <h3>{singleData.firstName}</h3>
            <h3>{singleData.lastName}</h3>
            <h3>{singleData.email}</h3>
            <h3>{singleData.phone}</h3>
            <h3>{singleData.time}</h3>
            <h3>{singleData.date}</h3>
          </div>
        ))}
       </div> 



    </div>
  )
}


