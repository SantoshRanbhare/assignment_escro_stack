import React from 'react'

import { CompanyDetails } from '../Data/CompnayOptions'
import '../css/Options.css'


const Options = () => {
  return (
    <select>
        <option disabled>Company Name</option>
        {
            CompanyDetails.map((element)=> (<option key={element.id}>{element.name}</option>))
        }
    </select>
  )
}

export default Options
