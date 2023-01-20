import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Productlist=()=>{
    const [product ,setProduct]=useState([])
    useEffect(()=>{
        dataRetrive()
    },[])
    const dataRetrive=async ()=>{
        let result = await fetch('http://localhost:2020')
        result = await result.json();
        setProduct(result)
    }
    const deleteRecord=async (id)=>{
        let data=await fetch(`http://localhost:2020/delete/${id}`,{
            method:'delete'
        });
        data=await data.json();
        if(data){
            dataRetrive()
        }
    }
    const searching=async(event)=>{

        let key = event.target.value;
        if(key){
            let data =await fetch(`http://localhost:2020/search/${key}`)
            data=await data.json()
            if(data){
                setProduct(data)
            }
        }else{
            dataRetrive()
        }
        
    }
    return (
        
        <>
        <div className='middle'>
            <h2>Product List</h2>
            <input type="text" placeholder='Search' onChange={searching} className='search'/>
            <ul>
                <li><strong>Name</strong></li>
                <li><strong>Price</strong></li>
                <li><strong>Category</strong></li>
                <li><strong>Company</strong></li>
                <li><strong>Opertion</strong></li>
            </ul>
            {
                product.length > 0 ? 
                product.map((item)=>
                    <ul key={item._id}>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button className='btncolor' onClick={()=>deleteRecord(item._id)}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link>
                        </li>
                    </ul>
                )
                :
                <h2>NO MATCH</h2>
            }
        </div>
        </>
    )
}
export default Productlist