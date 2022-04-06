// import Navbar from './Navbar'
import PlaceList from './PlaceList'
// import SideBar from './SideBar'
import React from 'react';
// import Box from '@mui/material/Box';
import '../assets/styles/MainPage.css'
const MainPage = () => {
    return (
        // <Box components="main" id="main-fx">
        //     <Navbar />
        //     <SideBar />

        <PlaceList itemsPerPage={9} />
        // </Box>
    )
}

export default MainPage