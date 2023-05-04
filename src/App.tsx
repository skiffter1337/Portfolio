import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {HireMe} from "./Components/HireMe/HireMe";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {AboutMe} from "./Components/AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <HireMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
