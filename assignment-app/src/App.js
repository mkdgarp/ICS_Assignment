import React from 'react';
import MainPage from './components/MainPage'
import PlaceDetail from './components/PlaceDetail'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Box from '@mui/material/Box';
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter >
      <Box components="main" id="main-fx">
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/PlaceDetail/:PlaceId" element={<PlaceDetail />} />
        </Routes>
      </Box>
    </BrowserRouter >

  );
}

export default App;
