import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import ContactUs from "../Components/ContactUs/ContactUs";
import Research from "../Components/Research/Research";
import Research5 from "../Components/Research5/Research5";
import Research4 from "../Components/Research4/Research4";
import Research3 from "../Components/Research3/Research3";
import Research2 from "../Components/Research2/Research2";






function Approuter() {

    return (
        <BrowserRouter>
            <Routes >
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About/>} />
                 
                    <Route path="/contact" element={<ContactUs/>} />
                    <Route path="/research" element={<Research/>} />
                    <Route path="/writing" element={<Research2/>} />
                    <Route path="/synopsis" element={<Research3/>} />
                    <Route path="/book" element={<Research4/>} />
                    <Route path="/conference" element={<Research5/>} />
                   
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default Approuter;