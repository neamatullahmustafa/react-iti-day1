import React , { useContext } from 'react';
// import  PhotosDataContext  from "../../ContextAPI/PhotosDataCont
import PhotosDataContext from "../../ContextAPI/PhotosDataContext";

export default function Task4ContextTable() {
  let {photosData} =useContext(PhotosDataContext)
  return (
    <div>
    <h1>photosData</h1>
    <div className='container'>
    <table class="table">
  <thead>
    <tr>
      <th >#</th>
      <th >First</th>
      <th >Last</th>
    </tr>
  </thead>
  <tbody>
 { photosData?(photosData.map((p)=>{
    return(
    <tr>
      <td>{p.id}</td>
      <td>{p.title}</td>
      <td><img src={p.url} className="w-25 rounded-5" alt="..." /></td>
    </tr>       ) })):( <i class="fas fa-spinner fa-spin"></i>)
  }
  </tbody>
</table>
</div>
    </div>
  )
}
