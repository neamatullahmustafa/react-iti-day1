import React , { useContext } from 'react';
// import  PhotosDataContext  from "../../ContextAPI/PhotosDataContext.jsx";
import PhotosDataContext from "../../ContextAPI/PhotosDataContext";

export default function Task4ContextCard() {
    let {photosData} =useContext(PhotosDataContext)

  return (
    <div>
    <h1>photosData</h1>
    <div className='container row'>
    {
        photosData?(photosData.map((p)=>{
            return(
                <div key={p.id} className="col-3">
                <div className="card" >
  <img src={p.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{p.title}</p>
  </div></div>
</div>

            )
        })):( <i class="fas w-25 m-auto fa-spinner fa-spin"></i>)
    }
    </div>  </div>
  )
}
