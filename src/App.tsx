import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {HireMe} from "./Components/HireMe/HireMe";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";
import {AboutMe} from "./Components/AboutMe/AboutMe";
import AOS from "aos";

function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Продолжительность анимации в миллисекундах
            offset: 200, // Смещение (в пикселях) до начала анимации
            easing: 'ease-in-out', // Функция плавности анимации (linear, ease, ease-in, ease-out, ease-in-out)
            delay: 200, // Задержка перед началом анимации (в миллисекундах)
            once: true
        });
    }, []);

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
