import { useState } from "react";
import { Route, Routes} from "react-router-dom"


import Home from "./Sections/Home";
import Nav from "./Sections/Nav";
import Contact from "./Sections/Contact";
import News from "./Sections/News";
import Services from "./Sections/Services";
import Testimonials from "./Sections/Testimonials";


function App() {
  return (
    <div>


      <Nav/>

      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/testimonials" element={<Testimonials/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      




    </div>
  );
}

export default App;
