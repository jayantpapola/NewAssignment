import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Card.css'

const Card = () => {

  const navigate = useNavigate()

  const data = useSelector((state)=> state.formData.value)
 
  useEffect(() => {
    if(data.fname === 'dummy'){
      navigate('/')
    }
  })
  
  return (
    <div className='Card'>

      <h1>User Info</h1>

      {/* Details */}
      <div className="card__row">
        <p className='firstname'> 
          <span>Firstname: </span> 
          <p>{data && data.fname}</p>
        </p>
        <p className='firstname'> 
          <span>Lastname: </span> 
          <p>{data && data.lname}</p>
        </p>
      
        <p className='Number'> 
          <span>Phone: </span> 
          <p>{data && data.number}</p>
        </p>
        <p className='email'> 
          <span>Email: </span> 
          <p>{data && data.email}</p>
        </p>
      </div>
      
      <button
      onClick={()=>navigate('/')}
      >
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
        </button>
    </div>
  )
}

export default Card