import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Directory from './pages/Directory';
import Departmentst from './pages/Departments';
import LaboratoryRs from './pages/LaboratoryRs';
import ImageRs from './pages/ImageRs';
import XraysRs from './pages/XraysRs';


function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='XraysRs' element={<XraysRs/>}/>
        <Route path='imageRs' element={<ImageRs/>}/>
        <Route path='laboratoryRs' element={<LaboratoryRs/>}/>
        <Route path='directory' element={<Directory/>}/>
        <Route path='departments' element={<Departmentst/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
