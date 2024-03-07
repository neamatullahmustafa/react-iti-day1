import "./App.css";
import Slider from "./Components/slider/Slider";
import Parent from "./Components/parent/Parent";
import SliderMan from "./Components/slider/SliderMan";
import Task2 from "./Components/task2/Task2";
import Create from "./Components/task3/Create";
import Show from "./Components/task3/Show";

import Error from "./Components/error/Error";
import NavBar from "./Components/navbar/NavBar";

import DisplayError from "./Components/error/DisplayError";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
