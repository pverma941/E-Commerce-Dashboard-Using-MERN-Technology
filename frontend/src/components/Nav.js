import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Nav=()=>{
    const Navigate=useNavigate()
    const auth=localStorage.getItem('user')
    const logout=()=>{
        localStorage.clear();
        Navigate('/signup')
    }
    return(
        <div>
            <img className="imagestyle" src="data:image/jpeg;base64,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" alt="logo" />
            {auth?
             <ul className='nav-ul'>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/signup" onClick={logout}>Logout</Link></li>
                </ul>
                :
                <ul className='nav-ul left'>
                    <li><Link to="/login">Login</Link></li>
                    <li className='left_p'><Link to="/signup">Sign up</Link></li>
                </ul>   
}
        </div>
    )
}
export default Nav