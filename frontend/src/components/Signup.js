import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import img1 from './register.png'
const Signup=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    const btnclick=async ()=>{
        console.log(name,email,password)
        let data = await fetch('http://localhost:2020/register',{
            method:'post',
            body:JSON.stringify( {name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        data = await data.json();
        console.log(data)
        if(data){
            navigate('/')
        }
        localStorage.setItem('user',JSON.stringify(data));
    }
    return(
        
        <div className="signup signupdesign">
            <img src={img1} className="images" alt="register" />
            <div>
            <h2>Register</h2>
        <input className="inputcss" type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="email" name="" id="" placeholder="Enter your Email" className="inputcss" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="password" name="" id="" placeholder="Password" className="inputcss" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button className="signbtn regis" type="button" onClick={btnclick}>Sign Up</button>
        </div>
        </div>
    )
}
export default Signup