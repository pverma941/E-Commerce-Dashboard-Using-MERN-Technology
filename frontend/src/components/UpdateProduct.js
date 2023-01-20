import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
const UpdateProduct= ()=>{
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[company,setCompany]=useState('')
    // const userId=JSON.parse(localStorage.getItem('user'))._id
    const param=useParams()
    const Navigate=useNavigate()
    useEffect(()=>{
        const retrivedata=async ()=>{
            let result =await fetch(`http://localhost:2020/update/${param.id}`)
            result = await result.json()
            setName(result.name);
            setCategory(result.category);
            setCompany(result.company);
            setPrice(result.price)
        }
        retrivedata()
    },[])
   
    const productclick=async()=>{
        let data = await fetch(`http://localhost:2020/update/${param.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"Application/json"
            }
        })
        data=data.json();
        if(data){
            Navigate('/')
        }
        
        // setName('')
        // setCategory('')
        // setCompany('')
        // setPrice('')
    }
    return(
        <>
        <div className="addproduct">
            <h3>UPDATE PRODUCT</h3>
            <input type="text" placeholder="Enter the Name" className="inputcss" onChange={(e)=>{setName(e.target.value)}} value={name}/> <br/>
           
            <input type="text" placeholder="Enter the price" className="inputcss" onChange={(e)=>setPrice(e.target.value)} value={price}/> <br/>
           
            <input type="text" placeholder="Enter the category" className="inputcss" onChange={(e)=>setCategory(e.target.value)} value={category}/> <br/>
           
            <input type="text" placeholder="Enter the company" className="inputcss" onChange={(e)=>setCompany(e.target.value)} value={company}/> <br/>
           
            <button type="button" onClick={productclick} className="signbtn">Update Product</button>
        </div>
        </>
    )
}
export default UpdateProduct;