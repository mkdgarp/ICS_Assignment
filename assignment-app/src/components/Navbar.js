import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';

import logoMain from '../assets/images/logo.jpg'
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <Grid container className="navbar-main">
            <Grid item xs={12}>
                <Box sx={{
                    display: {
                        xs: 'inline-flex',
                        sm: 'none'
                    },
                }}>
                    <img className="logo-when-xs"
                        width="53px"
                        height="53px"
                        src={logoMain}
                        alt="Logo"
                        loading="lazy"

                    />
                </Box>
                <Box className="nav-box-user">
                    <Box sx={{ px: 1 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Box>
                    <Box className="nav-user-name" sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        },
                    }}>
                        <Box sx={{ px: 1 }} components="span">Natdanai</Box>
                        <KeyboardArrowDownIcon />
                    </Box>
                </Box>
                <Box sx={{
                    px: 1, display: {
                        xs: 'none',
                        sm: 'flex'
                    }
                }} className="nav-box-bell">
                    <Box className="dot-red"></Box>
                    <Box components="span">
                        <NotificationsIcon />
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Navbar