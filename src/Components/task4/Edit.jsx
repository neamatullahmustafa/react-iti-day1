import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPrd = () => {
    const { id } = useParams();
    const Navigate = useNavigate()
    let [Prd, setPrd] = useState({
        name: '',
        price: 0,
        quantity: 0,
        imgUrl: 'https://source.unsplash.com/random'
    });
    let GetById = (id) => {
        axios.get(`http://localhost:3001/products/${id}`)
            .then(res => setPrd(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => { GetById(id) }, [])
    let EditPrd = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/products/${id}`,Prd)
        .then((res)=>setPrd(res.data))
        .catch(err=>console.log(err))
        Navigate("/Show")
    }
    let HandleChange = useCallback((e) => {
        console.log(e)
        const { name, value } = e.target;
        setPrd((old) => ({
            ...old,
            [name]: value
        }))
    })
    return (
        <div>
            <h1>Edit</h1>
            <form action="" onSubmit={EditPrd}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" name="name" value={Prd.name} onChange={HandleChange} />
                    <label for="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Image" name="imgUrl" value={Prd.imgUrl} onChange={HandleChange} />
                    <label for="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Price" name="price" value={Prd.price} onChange={HandleChange} />
                    <label for="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Quantity" name="quantity" value={Prd.quantity} onChange={HandleChange} />
                    <label for="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>
        </div>
    );
};

export default EditPrd;