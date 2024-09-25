import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import ContactUs from "../Components/ContactUs/ContactUs";
import Research from "../Components/Research/Research";
import Research5 from "../Components/Research5/Research5";
import Research4 from "../Components/Research4/Research4";
import Research3 from "../Components/Research3/Research3";
import Research2 from "../Components/Research2/Research2";
import Service from "../Components/Service/Service";
function Approuter() {
    return (
        <BrowserRouter>
            <Routes >
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<About />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/ResearchArticleProposal" element={<Research />} />
                    <Route path="/ResearchArticleWriting" element={<Research2 />} />
                    <Route path="/SynopsisandThesisWriting" element={<Research3 />} />
                    <Route path="/AcademicBookPublication" element={<Research4 />} />
                    <Route path="/InternationalConferenceOrganizing" element={<Research5 />} />
                 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Approuter;