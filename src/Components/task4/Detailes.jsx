import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';

const Detailes = () => {
    const { id } = useParams()
    let [prd, setPrd] = useState({})
    let GetPrdById = () => {
        axios.get(`http://localhost:3001/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setPrd(res.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        GetPrdById()
    }, [])
    return (
        <div>
            <h1>Product Details</h1>
            <div class="card" >
                <img src={prd.imgUrl} class="card-img-top" alt="..." height="300px"/>
                    <div class="card-body">
                        <h5 class="card-title">{prd.name}</h5>
                        <p class="card-text">{prd.quantity}</p>
                        <p class="card-text">{prd.price}</p>
                        <Link to="/Show" class="btn btn-dark">Go to Products</Link>
                    </div>
            </div>
        </div>
    );
};

export default Detailes;