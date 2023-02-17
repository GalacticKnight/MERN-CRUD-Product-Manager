import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const ShowOne = ({products, setProducts}) => {//in app.js when you pass those states from the routes
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const [created,setCreated] =useState(Date())
    const [updateAt, setUpdatedAt] = useState(Date())

    const navigate = useNavigate();
    // https://login.codingdojo.com/m/146/6952/80180


    const removeFromDom = () => {
        setProducts(products.filter(product => product._id != id)); //We could also write this in our PersonList component
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    // https://login.codingdojo.com/m/146/6960/70906


    const onDelete = () => {
        axios.delete('http://localhost:8000/api/product/' + id)// same as const { id } = useParams(); line 9
            .then(res => {
                removeFromDom()
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <p>Title:</p>
            <p>{title}</p>
                
            <p>Price:</p>
            <p>{price}</p>
                
            <p>Description:</p>
            <p>{description}</p>
                
            <button onClick={onDelete}>Delete</button>
            
        </div>
    )
}

export default ShowOne;