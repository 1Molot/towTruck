import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainInform} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./woks/Projects";
import {Remote} from "./remote/Remote";
import {Footer} from "./footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import phone from "./assets/img/phone.svg";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <MainInform/>
                <Skills/>
                <Projects/>
                <Remote/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
