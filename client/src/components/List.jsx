import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const List = ({products, setProducts}) => {
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
	    console.log(res.data);
            setProducts(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    //handle delete function
    //handle edit function
    return (
        <div>
            {
                products.map((result, index)=>{
                return <p key={index}>{result.title}, {result.price},{result.description}
                <Link to ={`/product/${result._id}`}>{result.title}'s Page!</Link>
                <Link to ={`/product/${result._id}/update`}>Update</Link>
                {/* `/product/${result._id}` is from the routes from app.js */}
                </p>
                //link to showone by using the result.title
                //
                })
            }
        </div>
    )
}
export default List;