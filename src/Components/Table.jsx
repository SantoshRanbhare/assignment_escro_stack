import React, { useEffect } from 'react'
import '../css//Table.css';
import { useState } from 'react';

const Table = () => {
  const [value,setValue] = useState(100);

  useEffect(()=>{
    setInterval(() => {
      setValue(  (Math.random() * 10).toFixed(2))
    }, 1000);
  },[])

  return (
    <div>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No/UPI ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>07/05/2024 01:04 PM</td>
            <td>{value}</td>
            <td>₹ 21,337</td>
            <td>1000000</td>
            <td>AC0CF7RRUY407QHU</td>
          </tr>
          <tr>
            <td>07/05/2024 01:04 PM</td>
            <td>{value}</td>
            <td>₹ 21,337</td>
            <td>CMS4136431811</td>
            <td>0104SLNEFTPL</td>
          </tr>
          <tr>
            <td>07/05/2024 01:04 PM</td>
            <td>₹ {value}</td>
            <td>₹ 21,337</td>
            <td>CMS4019645011</td>
            <td>ACT861VM9RR67Z5C</td>
          </tr>


        </tbody>
      </table>
      
    </div>
  )
}

export default Table
