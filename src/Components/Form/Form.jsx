import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { formAction } from '../../Redux/Reducer/FromReducer'
import './Form.css'

const Form = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [number, setNumber] = useState()
    const [email, setEmail] = useState()


    const formSubmit = () =>{
        var atposition=email.indexOf("@");  
        var dotposition=email.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
            alert("Please enter a valid e-mail address");  
            return 
        } 
        else if(!email || !fname || !lname || !number){
            alert('Please Fill Out Form First') 
            return
        }
        else if(number.length <= 9){
            alert('Number must be of 10 digit')
        }
        else{
            dispatch(
                formAction({
                    fname:fname,
                    lname:lname,
                    number:number,
                    email:email
                }))
            navigate('/card')
        }
    }




  return (
    <form className='Form'>

        <h1>Form</h1>

        <div className="formRow">
            <input 
                type="text" 
                name='fname' 
                placeholder='firstname' 
                required
                onChange={(e)=>setFname(e.target.value)}
            />
            <input 
            type="text" 
            name='lname' 
            placeholder='lastname' 
            required
            onChange={(e)=>setLname(e.target.value)}
            />
            <input 
            type="number" 
            name='phone' 
            placeholder='phone' 
            required
            onChange={(e)=>setNumber(e.target.value)}
            />
            <input 
            type="email" 
            name='email' 
            placeholder='email' 
            required
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        
        <button
            onClick={formSubmit}
        >SUBMIT
        </button>

    </form>
  )
}

export default Form