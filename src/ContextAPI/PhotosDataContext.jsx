import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
const PhotosDataContext = createContext();
export const PhotosDataContextProvider = (props) => {
  let { children } = props;
  let [photosData, setPhotosData] = useState(null);
  let GetPhotos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photo")
      .then((res) => setPhotosData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetPhotos();
  }, []);

  const MyContext = useMemo(() => ({ photosData }), [photosData]);
  return (
    <PhotosDataContext.Provider value={MyContext}>
      {children}
    </PhotosDataContext.Provider>
  );
};
export default PhotosDataContext;
