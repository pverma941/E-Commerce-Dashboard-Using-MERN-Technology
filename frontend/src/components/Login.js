import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './login.jpg'
const Login=()=>{
    const Navigate= useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            Navigate('/')
        }
    })
    
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const btnClicked=async ()=>{
        console.log(email,password)
        let result =await fetch('http://localhost:2020/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"Application/json"
            }
        })
        result=await result.json();
        // console.log(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            Navigate('/')
        }else{
            alert("invalid credential")
        }
    }
    return(
        <div className='login'>
            <img src={img1} alt="login" />
            <div className="signup">
            <h1  className="regis">Login</h1>
            <input type="email" className="inputcss" name="" id="" placeholder='Enter Your Mail' onChange={(e)=>setEmail(e.target.value)} value={email}/><br/>
            <input type="Password" className="inputcss" name="" id="" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} value={password}/><br/><br/>
            <button className="signbtn regis" type="button" onClick={btnClicked}>Login</button>
            </div>
        </div>
    )
}
export default Login;