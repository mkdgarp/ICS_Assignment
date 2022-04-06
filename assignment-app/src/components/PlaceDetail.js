import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../assets/styles/PlaceDetail.css'
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PlaceDetail = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [operationTime, setOperationTime] = useState([]);
    const [imageListShow, setImageListShow] = useState([]);

    let { PlaceId } = useParams();

    async function fetchData() {
        await fetch("../data/json_data.json")
            .then((response) => response.json())
            .then((response) => {
                setRestaurant(response.find(filtering => filtering.id === Number(PlaceId)))
                setOperationTime(response.find(filtering => filtering.id === Number(PlaceId)).operation_time)
                setImageListShow(response.find(filtering => filtering.id === Number(PlaceId)).images)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (

        <>
            <Box sx={{ flexGrow: 1, }}>
                <Grid className="fx-position" container sx={{
                    pl: {
                        xs: '1rem',
                        sm: '8rem'
                    },
                    display: 'block'
                }}>
                    <Box>
                        {/* <Button variant="contained">{restaurant.id}</Button> */}
                        {/* {console.log(operationTime)} */}
                        <Link to="/">
                            <Button className="fx-btn-hover" sx={{ borderRadius: "30px", backgroundColor: "#134B8A", color: 'white' }}>
                                <Box className="fx-btn-back" component="span">
                                    <ArrowBackIosIcon />
                                    Back
                                </Box>
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{
                        display: {
                            xs: 'block',
                            sm: 'flex'
                        }, my: 2, pt: 1, backgroundColor: '#C4D3E9'
                    }}>
                        <Grid item xs={12} sm={7}>
                            <Card sx={{ borderRadius: '10px', m: 3 }}>

                                <CardMedia
                                    component="img"
                                    height="300px"
                                    image={restaurant.profile_image_url}
                                    alt={restaurant.name}
                                />
                                <Box sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', pb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <Box className="h4" component="span">{restaurant.name}</Box>
                                        </Box>
                                        <Box className="text-primary-default" sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', justifyContent: 'center', ml: 'auto' }}>
                                            <FiberManualRecordIcon sx={{ width: '11px', height: '11px', }} />
                                            <Box className="h7" component="span" sx={{ px: 1, fontWeight: 500 }}>{restaurant.rating}</Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box className="h7" sx={{ fontWeight: 700, width: '35%' }}>
                                            Address :
                                        </Box>
                                        <Box sx={{ width: '65%' }}>
                                            {restaurant.address}
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box className="h7" sx={{ fontWeight: 700, width: '35%', }}>
                                            Opening Hour :
                                        </Box>
                                        <Box sx={{ display: 'block', width: '65%' }}>
                                            {operationTime.map((opt, index) => {
                                                if (opt.time_open !== "closed")
                                                    opt.time_open = opt.time_open + " AM"
                                                if (opt.time_close !== "closed")
                                                    opt.time_close = opt.time_close + " PM"

                                                return (
                                                    <Box key={index} >
                                                        {opt.day}: {opt.time_open} - {opt.time_close}
                                                    </Box>

                                                )
                                            })}
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Card sx={{ borderRadius: '10px', m: 3 }}>
                                <Box sx={{ m: 3 }}>
                                    <Box className='h5' component="span" sx={{ py: 2, fontWeight: 500 }}>
                                        Images
                                    </Box>
                                    <Box>

                                        {
                                            imageListShow.map((imgls, index) => {
                                                return (
                                                    <CardMedia key={index}
                                                        component="img"
                                                        height="318px"
                                                        image={imgls}
                                                        alt={restaurant.name}
                                                        sx={{ mt: 2 }}
                                                    />
                                                )
                                            })
                                        }



                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            {/* {restaurant.map((rest, index) => {
                return (
                    <Box key={index} sx={{ flexGrow: 1, }}>
                        <Grid className="fx-position" container sx={{
                            pl: {
                                xs: '1rem',
                                sm: '8rem'
                            },
                            display: 'block'
                        }}>
                            <Box>
                                <Button variant="contained">{rest.id}</Button>

                            </Box>
                            <Box sx={{ display: 'flex', my: 2, backgroundColor: 'red' }}>
                                <Grid item xs={12} sm={8}>
                                    <Card sx={{ borderRadius: '10px', m: 3 }}>

                                        <CardMedia
                                            component="img"
                                            height="300px"
                                            image={rest.profile_image_url}
                                            alt="Paella dish"
                                        />
                                        <Box sx={{ p: 4 }}>
                                            <Box sx={{ display: 'flex', pb: 3 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <Box className="h4" component="span">{rest.name}</Box>
                                                </Box>
                                                <Box className="text-primary-default" sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', justifyContent: 'center', ml: 'auto' }}>
                                                    <FiberManualRecordIcon sx={{ width: '11px', height: '11px', }} />
                                                    <Box className="h7" component="span" sx={{ px: 1, fontWeight: 500 }}>{rest.rating}</Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box component="span" sx={{ fontWeight: 700, width: '150px' }}>
                                                    Address :
                                                </Box>
                                                <Box component="span" sx={{ width: 'fit-content' }}>
                                                    {rest.address}
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box component="span" sx={{ fontWeight: 700, width: '150px', }}>
                                                    Opening Hour :
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    axx
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                )
            })} */}
        </>
    )
}

export default PlaceDetail