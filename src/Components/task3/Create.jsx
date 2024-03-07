import React from "react";
import axios from "axios";
import * as yup from "yup";

import { useFormik } from "formik";
import { useState } from "react";

export default function Create() {

  const[loading , setLoading]=useState(false)
  const[errorMess , setErrorMess]=useState("")
  const product = useFormik({
    initialValues: {
      name: "",
      price: 0,
      quantity: 0,
      imgUrl: "https://source.unsplash.com/random",
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      price: yup.number().required().positive().integer(),
      quantity: yup.number().required().positive().integer(),
      imgUrl: yup.string().url().nullable(),
    }),
    onSubmit: (values) => {
      console.log(values);
setLoading(true);
      axios
        .post(
          "http://localhost:3001/products",values

        )
        .then((res) => {
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) =>{console.log(err.message);
          setErrorMess(err.message)
          setLoading(false);   } );
    },
  });

  return (
    <div className="w-50 m-auto">
      <h1>Add New Product</h1>
      <form onSubmit={product.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput1"
            placeholder="Name"
            name="name"
            onBlur={product.handleBlur}
            defaultValue={product.values.name}
            onChange={product.handleChange}
          />
          {product.touched.name && product.errors.name ? (
            <div className="alert alert-danger">{product.errors.name}</div>
          ) : null}
          <label htmlFor="floatingInput1">Product Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput2"
            placeholder="Image"
            name="imgUrl"
            onBlur={product.handleBlur}
            defaultValue={product.values.imgUrl}
            onChange={product.handleChange}
          />{" "}
          {product.touched.imgUrl && product.errors.imgUrl ? (
            <div className="alert alert-danger">{product.errors.imgUrl}</div>
          ) : null}
          <label htmlFor="floatingInput2">Product Image</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput3"
            placeholder="Price"
            name="price"
            onBlur={product.handleBlur}
            defaultValue={product.values.price}
            onChange={product.handleChange}
          />
          <label htmlFor="floatingInput3">Product Price</label>
          {product.touched.price && product.errors.price ? (
            <div className="alert alert-danger">{product.errors.price}</div>
          ) : null}{" "}
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput4"
            placeholder="Quantity"
            name="quantity"
            onBlur={product.handleBlur}
            defaultValue={product.values.quantity}
            onChange={product.handleChange}
          />
          <label htmlFor="floatingInput4">Product Quantity</label>{" "}
          {product.touched.quantity && product.errors.quantity ? (
            <div className="alert alert-danger">{product.errors.quantity}</div>
          ) : null}
        </div>
        <button className="btn btn-dark" type="submit">
        {loading?  <i className="fa-solid fa-spinner fa-spin-pulse"></i>:    " Submit"}

        </button>
        {errorMess? (
            <div className="alert alert-danger">{errorMess}</div>
          ) : null}
      </form>
    </div>
  );
}
