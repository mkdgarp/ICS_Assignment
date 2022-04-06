import React from "react";
import Box from '@mui/material/Box';
import '../assets/styles/SideBar.css'
import logoMain from '../assets/images/logo.jpg'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const SideBar = () => {
    return (
        <Box className="sidebar-fx" sx={{
            display: {
                xs: 'none',
                sm: 'block'
            }
        }}>
            <Box className="sidebar-logo-main" sx={{ p: 2, pt: 3, pb: 1 }}>
                <img
                    width="53px"
                    height="53px"
                    src={logoMain}
                    alt="Logo"
                    loading="lazy"

                />
            </Box>
            <hr className="hr1" />
            <Box className="sidebar-list-1" sx={{ textAlign: 'center' }}>
                <Box className="sidebar-box-list-1">
                    <FormatListBulletedIcon className="fx-list-1" />
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar