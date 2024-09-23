import "./assets/style.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./Pagers/Main";
import Category from "./Pagers/Category"
import Tshirtitem from "./Pagers/Tshirtitem";


function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                     <Route path="/hui" element={<Category/>}/>
                     <Route path="/f" element={<Tshirtitem/>}/>
                </Routes>

            </main>
            </>
    );
}

export default App;
