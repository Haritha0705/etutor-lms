import React from "react";
import Nav_Bar from "./Components/Nav_Bar.jsx";
import Hero from "./Pages/Landing Page/Hero.tsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from "./Pages/Courses Page/CoursesPage.tsx";
import About from "./Pages/About page/AboutPage.tsx";
import Contact from "./Pages/ContactPage.tsx";
import Instructor from "./Pages/Instructor Page/Become_an_InstructorPage.tsx";
import Career from "./Pages/Career Page.tsx";
import ErrorPage from './Pages/ErrorPage.tsx'

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Nav_Bar />
            <main className="pt-32">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/instructor" element={<Instructor />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/notFound" element={<ErrorPage/>} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>



    )
}

export default App
