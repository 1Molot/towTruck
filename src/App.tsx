import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {MainInform} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./woks/Projects";
import {Remote} from "./remote/Remote";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className={'main'}>
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
