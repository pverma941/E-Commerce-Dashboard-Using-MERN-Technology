import React,{useState} from "react";

const Addproduct= ()=>{
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[company,setCompany]=useState('')
    const[error,setError]=useState(false)
    const userId=JSON.parse(localStorage.getItem('user'))._id
    const productclick=async()=>{
        // if name is empty !name return true otherwise false
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        let product = await fetch('http://localhost:2020/add',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"Application/json"
            }
        })
        product= await product.json();
        console.log(product)
        setName('')
        setCategory('')
        setCompany('')
        setPrice('')
    }
    return(
        <>
        <div className="addproduct">
            <h3>ADD PRODUCT</h3>
            <input type="text" placeholder="Enter the Name" className="inputcss" onChange={(e)=>setName(e.target.value)} value={name}/> <br/>
            { error && !name && <span className="errormessage">Enter valid name</span>} { error && !name && <br/>}
            <input type="text" placeholder="Enter the price" className="inputcss" onChange={(e)=>setPrice(e.target.value)} value={price}/> <br/>
            { error && !price && <span className="errormessage">Enter valid price</span>} { error && !price && <br/>}
            <input type="text" placeholder="Enter the category" className="inputcss" onChange={(e)=>setCategory(e.target.value)} value={category}/> <br/>
            { error && !category && <span className="errormessage">Enter category</span>} { error && !category && <br/>}
            <input type="text" placeholder="Enter the company" className="inputcss" onChange={(e)=>setCompany(e.target.value)} value={company}/> <br/>
            { error && !company && <span className="errormessage">Enter company</span>} { error && !company && <br/>}
            <button type="button" onClick={productclick} className="signbtn">Add Product</button>
        </div>
        </>
    )
}
export default Addproduct;