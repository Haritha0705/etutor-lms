import React from "react";
import Nav_Bar from "./Components/Shared/Nav_Bar.tsx";
import Hero from "./Pages/Landing Page/Hero.tsx";
import Footer from "./Components/Shared/Footer.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from "./Pages/Courses Page/CoursesPage.tsx";
import About from "./Pages/About page/AboutPage.tsx";
import Contact from "./Pages/ContactPage.tsx";
import Career from "./Pages/Career Page.tsx";
import ErrorPage from './Pages/ErrorPage.tsx'
import Become_an_InstructorPage from "./Pages/Become_an_InstructorPage.tsx"

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
                    <Route path="/become_an_instructor" element={<Become_an_InstructorPage />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/notFound" element={<ErrorPage/>} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>



    )
}

export default App
