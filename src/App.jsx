import "./App.css";
import Slider from "./Components/slider/Slider.jsx";
import Parent from "./Components/parent/Parent.jsx";
import SliderMan from "./Components/slider/SliderMan.jsx";
import Task2 from "./Components/task2/Task2.jsx";
import Create from "./Components/task3/Create.jsx";
import Show from "./Components/task3/Show.jsx";
import { PhotosDataContextProvider } from "./ContextAPI/PhotosDataContext.jsx";
import ConCard from "./Components/task4/Task4ContextCard.jsx";
import ConTable from "./Components/task4/Task4ContextTable.jsx";
import Edit from "./Components/task4/Edit.jsx";
import Detailes from "./Components/task4/Detailes.jsx";

import Error from "./Components/error/Error.jsx";
import NavBar from "./Components/navbar/NavBar.jsx";

import DisplayError from "./Components/error/DisplayError.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <PhotosDataContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="" element={<h1>helloooo</h1>} />
              <Route path="Task2" element={<DisplayError />} />
              <Route path="parent" element={<Parent />} />
              <Route path="Slider" element={<Slider />} />
              <Route path="SliderMan" element={<SliderMan />} />
              <Route path="Create" element={<Create />} />
              <Route path="Show" element={<Show />} />
              <Route path="Detailes/:id" element={<Detailes />} />
              <Route path="Edit/:id" element={<Edit />} />
              <Route path="ConCard" element={<ConCard />} />
              <Route path="ConTable" element={<ConTable />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
        {/* <Error/> */}
        {/* <DisplayError/> */}
        {/* <Create/> */}
        {/* <SliderMan />
         <Slider />
         <Parent /> */}
        {/* <Task2/> */}
      </PhotosDataContextProvider>
    </>
  );
}

export default App;
