import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const CreateForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const [errors, setErrors] = useState({})//empty object
    const [created,setCreated] =useState(Date())
    const [updateAt, setUpdatedAt] = useState(Date())

    const navigate = useNavigate();
    // https://login.codingdojo.com/m/146/6952/80180

    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product/', {
            title,    // this is shortcut syntax for 
            price,      // this is shortcut syntax for 
            description
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate("/")
            })
            .catch(err=>{setErrors(err.response.data.errors);
                console.log(err.response)})
            // this is also not part of the platform
    }
    return(
        <div>
            <form
            //  onSubmit={onSubmitHandler}
            >
                <div>
                    <p>Title:</p>
                    <input type="text" name="title" onChange={ (e) => setTitle(e.target.value) }/>
                    {errors.title && <span className='accent'>{errors.title.message}</span>}{/* short curcuiting */}
                    
                </div>
                <div>
                    <p>Price:</p>
                    <input type="number" name="price" onChange={ (e) => setPrice(e.target.value) }/>
                    {errors.price && <span className='accent'>{errors.price.message}</span>}
                    {/* error.XXXXXXXXXXXXXX.message X is what you would have put based on the error attribue */}
                </div>
                <div>
                    <p>Description:</p>
                    <input type="text" name="description" onChange={ (e) => setDescription(e.target.value) }/>
                    {errors.description && <span className='accent'>{errors.description.message}</span>}
                    {/* error.XXXXXXXXXXXXXX X is what you would have put based on the error attribue */}
                </div>
                {/* <input type="submit" value="Submit"/> */}
                <button onClick={onSubmitHandler}></button>
            </form>
            <div>
                {title}, {price}, {description}
            </div>
        </div>
    )
}

export default CreateForm;