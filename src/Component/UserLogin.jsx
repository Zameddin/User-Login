import React from 'react'
import './UserLogin.css'
import { useState } from 'react';



const UserLogin = () => {
   


    const [alert1, setAlert] = useState('');
    const [checkNumber, setCheck] = useState("")

    
    function checkEmail(e) {
        console.log(e.target.parentElement.children[2])
        let a = e.target.value
        let b = a.split('.').reverse()[0]
        if (b === 'com' || b === 'az') {
            setAlert('Zehmet olmasa .ru yazin');
            document.querySelector('.displayNone').style.display = 'block'
            setCheck(b)
        } else {
            document.querySelector('.displayNone').style.display = 'none'
            setAlert('');
        }
    }
    const checkSubmit = (e) => {

        if (checkNumber === 'com' || checkNumber === 'az' || pass < 8) {
            
            alert('Emaili ve parolu duzgun daxil edin!');
        }
        
    }
    const [pass, setPass] = useState(0);
    const password = (e) => {
        setPass(e.target.value.length)
    }
   

    return (
        <div className='UserLogin'>

            <h1>Login screen</h1>
            <form action="">
                <label>Email
                    <input className='input1' placeholder='example: zameddin@gmail.ru' onKeyUp={checkEmail} type='email' />

                </label>
                <p className='displayNone'>{alert1}</p>
                <label> Password
                    <input className='input2' placeholder='min 8 simvol' minLength={8} onKeyUp={password} type='password' />

                </label>

                <button onClick={checkSubmit}>Login</button>
         
            </form>
        </div>
    )
}


export default UserLogin

