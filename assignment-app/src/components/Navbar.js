import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <Grid container className="navbar-main">
            <Grid item xs={12}>
                <Box className="nav-box-user">
                    <Box sx={{ px: 1 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Box>
                    <Box className="nav-user-name">
                        <Box sx={{ px: 1 }} components="span">Natdanai</Box>
                        <KeyboardArrowDownIcon />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Navbar