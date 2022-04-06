import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import '../assets/styles/CardBox.css'
import { Box } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {
    Link,
} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const CardBox = props => {

    return (
        <Link to={`PlaceDetail/${props.idData}`}>
            <Card className="card-fx-main" sx={{ borderRadius: '10px' }}>
                <CardHeader
                    sx={{ pb: 0 }}
                    avatar={
                        <Avatar sx={{ width: '60px', height: '60px', borderRadius: '10px' }}
                            src={props.srcProfile}
                            alt={props.nameTitle}
                            loading="lazy"
                        />
                    }
                    title={
                        <Box sx={{ fontSize: '18px', fontWeight: 500 }}>{props.nameTitle}</Box>
                    }
                    subheader={
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <CalendarMonthIcon />
                                <Box components="span">{props.openTime} AM - {props.closeTime} PM</Box>
                            </Box>
                            <Box className="text-primary-default" sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', justifyContent: 'center', ml: 'auto' }}>
                                <FiberManualRecordIcon sx={{ width: '11px', height: '11px', }} />
                                <Box className="h7" components="span" sx={{ px: 1, fontWeight: 500 }}>{props.rating}</Box>
                            </Box>
                        </Box>
                    }
                />

                <Box sx={{ px: 2, }}>
                    <ImageList sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        }, height: '120px', overflow: 'hidden', borderRadius: '10px'
                    }} gap={0} cols={3} >
                        {
                            props.imageList.map((imageListShow, index) => {
                                return (
                                    <ImageListItem className='fx-img-card-height' sx={{ height: '120px' }} key={index}>
                                        <img
                                            src={imageListShow}
                                            alt={props.nameTitle}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                )
                            })
                        }
                    </ImageList>

                    <Slide>
                        {props.imageList.map((slideImage, index) => {
                            return (
                                <div className="each-slide" key={index.toString()} >
                                    <div className="fx-slide-img" style={{ 'height': '120px', 'backgroundImage': `url(${slideImage})` }}>
                                        <span >{slideImage}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slide>
                </Box>

            </Card>
        </Link>
    );
}


export default CardBox